use starknet::ContractAddress;
use debug::PrintTrait;

#[derive(Model,Copy, Drop, Serde)]
struct Moves {
    #[key]
    player: ContractAddress,
    opponent: ContractAddress,
    game_id: felt252,
    avatar_choice: felt252,
    move_one: u32,
    move_two: u32,
    move_three: u32,
    move_four: u32,
    move_five: u32,
    counter: u32,
    turn : bool,
}

#[derive(Model,Copy, Drop, Serde)]
struct Board {
    #[key]
    game_id: felt252,
    a_1: felt252,
    a_2: felt252,
    a_3: felt252,
    b_1: felt252,
    b_2: felt252,
    b_3: felt252,
    c_1: felt252,
    c_2: felt252,
    c_3: felt252,
}

#[derive(Model,Copy, Drop, Serde)]
struct Game {
    #[key]
    game_id: felt252,
    winner: felt252,
    player_one_: ContractAddress,
    player_two_: ContractAddress
}

#[derive(Model,Copy, Drop, Serde)]
struct Fixed {
    #[key]
    fixed_key : ContractAddress,
    worldcount : felt252
}

#[derive(Model,Copy, Drop, Serde)]
struct Response {
    #[key]
    game_id: felt252,
    gameresponse : felt252,
}


 #[derive(Serde, Copy, Drop, Introspect)]
    enum Square {
        Top_Left: (),
        Tops: (),
        Top_Right: (),
        Left: (),
        Centre: (),
        Right: (),
        Bottom_Left: (),
        Bottom: (),
        Bottom_Right: (),
    }

    #[derive(Model,Copy, Drop, Serde)]
    struct Gate {
    #[key]
    constantkey: ContractAddress,
    owner: ContractAddress,
    token_address: ContractAddress
}
   
    #[derive(Model,Copy, Drop, Serde)]
    struct Players {
    #[key]
    player_address: ContractAddress,
    name_ : felt252
}

#[derive(Serde, Copy, Drop, Introspect)]
enum Players_tuple {
   details : (felt252, ContractAddress, u256),
}

     #[derive(Serde, Copy, Drop, Introspect)]
    enum Winning_tuple {
       winning_moves : (u32, u32, u32),
    }

   impl DirectionIntoFelt252 of Into<Square, felt252> {
        fn into(self: Square) -> felt252 {
            match self {
                Square::Top_Left(()) => 0,
                Square::Tops(()) => 1,
                Square::Top_Right(()) => 2,
                Square::Left(()) => 3,
                Square::Centre(()) => 4,
                Square::Right(()) => 5,
                Square::Bottom_Left(()) => 6,
                Square::Bottom(()) => 7,
                Square::Bottom_Right(()) => 8,
            }
        }
    }


