use sanmoku::models::{Moves, Board, Game, Square, Players};
use starknet::{ContractAddress};

// define the interface
#[starknet::interface]
trait IActions<TState> {
    fn initiate_game(
        ref self: TState, player_one: ContractAddress, player_two: ContractAddress
    ) -> felt252;
    fn spawn(ref self: TState, avatar: felt252, game_id: felt252, player: ContractAddress);
    fn play_game(ref self: TState, game_id: felt252, square: Square,player : ContractAddress) -> felt252;
    fn restart_game(ref self: TState, game_id: felt252, player1 :ContractAddress, player2: ContractAddress);
    fn init(ref self: TState, token_address: ContractAddress);
    fn register_player(ref self: TState, name_: felt252,player : ContractAddress);
    fn playerstatus(self : @TState, player : ContractAddress) -> Players;
}


#[dojo::contract]
mod actions {
    use sanmoku::models::{Moves, Board, Game, Square, Winning_tuple, Gate,Players,Players_tuple,Fixed,Response};
    use sanmoku::erc20_dojo::erc20::{IERC20Dispatcher, IERC20DispatcherTrait};
    use traits::TryInto;
    use option::OptionTrait;
    use debug::PrintTrait;
    use starknet::{ContractAddress, get_caller_address};
    use super::IActions;
    use core::zeroable::Zeroable;

    #[derive(Drop, starknet::Event)]
    struct Spawn {
        player_1: ContractAddress,
        player_2: ContractAddress,
        game_id: felt252
    }

     #[derive(Drop, starknet::Event)]
    struct Result {
        result: felt252
    }

    #[derive(Drop, starknet::Event)]
    struct Reg {
        playeraddress: ContractAddress,
        name__: felt252
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Spawn: Spawn,
        Result: Result,
        Reg: Reg
    }

    #[external(v0)]
    impl ActionsImpl of IActions<ContractState> {
        fn initiate_game(
            ref self: ContractState, player_one: ContractAddress, player_two: ContractAddress
        ) -> felt252 {
            let world = self.world_dispatcher.read();
            let key = starknet::contract_address_const::<0x0123>();
            let worldcounter = get!(world, key, (Fixed));           
            let game_id = worldcounter.worldcount;
            set!(
                world,
                (Fixed {fixed_key : key,
                    worldcount: worldcounter.worldcount + 1
                })
            );
            set!(
                world,
                (Game {
                    game_id: game_id, winner: '', player_one_: player_one, player_two_: player_two,
                })
            );
            game_id
        }
        fn spawn(ref self: ContractState, avatar: felt252, game_id: felt252, player: ContractAddress) {
            let world = self.world_dispatcher.read();
            let (mut board_state, mut game) = get!(world, game_id, (Board, Game));
            let mut moves = get!(world, player, (Moves));
            assert(game_id == game.game_id, 'wrong_ID');
            //spawning players
            if avatar == 1 {
                assert(player == game.player_one_, 'wrong_input');
                moves.player = game.player_one_;
                moves.opponent = game.player_two_;
                moves.game_id = game.game_id;
                moves.avatar_choice = 'X';
                moves.move_one = 404;
                moves.move_two = 404;
                moves.move_three = 404;
                moves.move_four = 404;
                moves.move_five = 404;
                board_state.game_id = game.game_id;
                set!(world, (moves, board_state, game));
            } else if avatar == 2 {
                assert(player == game.player_two_, 'wrong_input');
                moves.player = game.player_two_;
                moves.opponent = game.player_one_;
                moves.game_id = game.game_id;
                moves.avatar_choice = 'O';
                moves.move_one = 404;
                moves.move_two = 404;
                moves.move_three = 404;
                moves.move_four = 404;
                moves.move_five = 404;
                board_state.game_id = game.game_id;
                set!(world, (moves, board_state, game));
            }
            emit!(
                world,
                Spawn {
                    player_1: game.player_one_, player_2: game.player_two_, game_id: game.game_id
                }
            );
            return ();
        }

        fn play_game(ref self: ContractState, game_id: felt252, square: Square, player : ContractAddress) -> felt252 {
            let world = self.world_dispatcher.read();
            // obtain current board state
            let (mut board_state, mut game, mut gameresponse) = get!(world, game_id, (Board, Game, Response)); 
            let mut moves = get!(world, player, (Moves));
            let mut opponent_move = get!(world, moves.opponent, (Moves));
            // check player 
            assert(player == game.player_one_ || player == game.player_two_, 'wrong room');
            // check player turn
            assert(moves.turn == false, 'Not_your_turn');
            moves.turn = true;
            opponent_move.turn = false;
            let (played_move_board_state, current_move_state) = compute_board_state(
                board_state, moves, square
            );

            //call victory state function here
            let result = check_victory(current_move_state);
            let key = starknet::contract_address_const::<0x01>();
                let mut helper = get!(world, (key), Gate);
                let token_dispatcher = IERC20Dispatcher {contract_address : helper.token_address};
            let mut response : felt252 = ''.into();
            if result == 1 && moves.avatar_choice == 'X' {
                token_dispatcher.mint_(moves.player, 200);
                gameresponse.gameresponse = 'PLAYER X WINS'.into();
            } else if result == 1 && moves.avatar_choice == 'O' {
                token_dispatcher.mint_(moves.player, 200);
                gameresponse.gameresponse = 'PLAYER O WINS'.into();
            } else if result == 2 {
               gameresponse.gameresponse = 'DRAW'.into();
            }
             
            //update/set board state here
            set!(world, (current_move_state, played_move_board_state, opponent_move,gameresponse));
            emit!(
                world,
                Result {
                    result : response
                }
            );
           gameresponse.gameresponse
        }

        fn init(ref self: ContractState, token_address: ContractAddress){
            let world = self.world_dispatcher.read();
            let key = starknet::contract_address_const::<0x01>();
            let mut helper = get!(world, (key), Gate);
            assert(helper.owner == get_caller_address() || helper.owner.is_zero(), 'unauthorized');
            helper.owner = get_caller_address();
            helper.token_address = token_address;
            set!(world, (helper));
        }

        fn playerstatus(self: @ContractState, player : ContractAddress) -> Players{
            let world = self.world_dispatcher.read();
            let mut player = get!(world,player,(Players));
            player
        }

        fn restart_game(ref self: ContractState, game_id: felt252, player1 :ContractAddress, player2: ContractAddress) {
            let world = self.world_dispatcher.read();
            let (mut board_state, mut game, mut gameresponses) = get!(world, game_id, (Board, Game,Response));
            let mut moves = get!(world, player1, (Moves));
            let mut moves2 = get!(world, player2, (Moves));
            assert(game_id == game.game_id, 'wrong_ID');
            assert(player1 == game.player_one_, 'wrong_input');
            assert(player2 == game.player_two_, 'wrong_input');
                //reset player 1
                moves.move_one = 404;
                moves.move_two = 404;
                moves.move_three = 404;
                moves.move_four = 404;
                moves.move_five = 404;
                moves.turn = false;
                moves.counter = 0;
        
                //reset player 2           
                moves2.move_one = 404;
                moves2.move_two = 404;
                moves2.move_three = 404;
                moves2.move_four = 404;
                moves2.move_five = 404;
                moves2.turn = false;
                moves2.counter = 0;

                //reset board 
                board_state.a_1 = '';
                board_state.a_2 = '';
                board_state.a_3 = '';
                board_state.b_1 = '';
                board_state.b_2 = '';
                board_state.b_3 = '';
                board_state.c_1 = '';
                board_state.c_2 = '';
                board_state.c_3 = '';
                //set default state 
                gameresponses.gameresponse = 'restarted';
                set!(world, (moves, board_state, game,gameresponses));
                set!(world, (moves2, board_state, game));
        }
        fn register_player(ref self: ContractState, name_: felt252, player : ContractAddress){
            let world = self.world_dispatcher.read();
            let mut details = get!(world, player, (Players));  
            details.name_ = name_;      
            set!(world, (details));
            emit!(
                world,
                Reg {
                    playeraddress : player,
                    name__: name_
                }
            );
        }
    }

    fn compute_board_state(
        mut board_state: Board, mut player_moves_state: Moves, square: Square
    ) -> (Board, Moves) {
        //handle square selected here
        match square {
            Square::Top_Left(()) => {
                assert(board_state.a_1 == '', 'non_empty');
                board_state.a_1 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 0;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 0;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 0;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 0;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 0;
                }
            },
            Square::Tops(()) => {
                assert(board_state.a_2 == '', 'non_empty');
                board_state.a_2 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 1;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 1;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 1;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 1;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 1;
                }
            },
            Square::Top_Right(()) => {
                assert(board_state.a_3 == '', 'non_empty');
                board_state.a_3 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 2;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 2;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 2;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 2;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 2;
                }
            },
            Square::Left(()) => {
                assert(board_state.b_1 == '', 'non_empty');
                board_state.b_1 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 3;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 3;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 3;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 3;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 3;
                }
            },
            Square::Centre(()) => {
                assert(board_state.b_2 == '', 'non_empty');
                board_state.b_2 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 4;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 4;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 4;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 4;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 4;
                }
            },
            Square::Right(()) => {
                assert(board_state.b_3 == '', 'non_empty');
                board_state.b_3 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 5;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 5;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 5;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 5;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 5;
                }
            },
            Square::Bottom_Left(()) => {
                assert(board_state.c_1 == '', 'non_empty');
                board_state.c_1 = player_moves_state.avatar_choice;
                //check current move count to set the moved piece accordingly here
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 6;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 6;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 6;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 6;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 6;
                }
            },
            Square::Bottom(()) => {
                assert(board_state.c_2 == '', 'non_empty');
                board_state.c_2 = player_moves_state.avatar_choice;
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 7;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 7;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 7;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 7;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 7;
                }
            },
            Square::Bottom_Right(()) => {
                assert(board_state.c_3 == '', 'non_empty');
                board_state.c_3 = player_moves_state.avatar_choice;
                if player_moves_state.counter == 0 {
                    player_moves_state.move_one = 8;
                } else if player_moves_state.counter == 1 {
                    player_moves_state.move_two = 8;
                } else if player_moves_state.counter == 2 {
                    player_moves_state.move_three = 8;
                } else if player_moves_state.counter == 3 {
                    player_moves_state.move_four = 8;
                } else if player_moves_state.counter == 4 {
                    player_moves_state.move_five = 8;
                }
            },
        };
        //set move count after playing here
        player_moves_state.counter += 1;
        //return computed board and moves
        (board_state, player_moves_state)
    }
    fn check_victory(mut current_moves_state: Moves) -> felt252 {
        let mut winning_array: Array<Winning_tuple> = ArrayTrait::new();
        winning_array.append(Winning_tuple::winning_moves((0, 1, 2)));
        winning_array.append(Winning_tuple::winning_moves((3, 4, 5)));
        winning_array.append(Winning_tuple::winning_moves((6, 7, 8)));
        winning_array.append(Winning_tuple::winning_moves((0, 3, 6)));
        winning_array.append(Winning_tuple::winning_moves((1, 4, 7)));
        winning_array.append(Winning_tuple::winning_moves((2, 5, 8)));
        winning_array.append(Winning_tuple::winning_moves((0, 4, 8)));
        winning_array.append(Winning_tuple::winning_moves((2, 4, 6)));

        //check if combination matches any of the tuple
        let mut moves_array: Array<u32> = ArrayTrait::new();
        moves_array.append(current_moves_state.move_one);
        moves_array.append(current_moves_state.move_two);
        moves_array.append(current_moves_state.move_three);
        moves_array.append(current_moves_state.move_four);
        moves_array.append(current_moves_state.move_five);

        //return a winning array_tupple
        let mut loop_count = 0;
        let mut loop_two_count = 0;
        let hol = moves_array.span();
        let true_rep: felt252 = 1.into();
        let false_rep: felt252 = 2.into();
        let res = loop {
            if loop_two_count > 7 {
                break false_rep;
            };
            let tuple_returned = *winning_array.at(loop_two_count);
            let (res1, res2, res3) = tuple_returned.process();
            let mut won: Array<u32> = ArrayTrait::new();
            let inner_check = loop {
                if loop_count > 4 {
                    loop_count = 0;
                    break;
                };
                let item = *hol.at(loop_count);
                if item == res1 {
                    won.append(item);
                } else if item == res2 {
                    won.append(item);
                } else if item == res3 {
                    won.append(item);
                }

                loop_count += 1;
            };
            if won.len() == 3 {
                break true_rep;
            }
            loop_two_count += 1;
        };
        res
    }
    #[generate_trait]
    impl ProcessingImpl of Processing {
        fn process(self: Winning_tuple) -> (u32, u32, u32) {
            match self {
                Winning_tuple::winning_moves((x, y, z)) => { (x, y, z) },
            }
        }
    }
}
