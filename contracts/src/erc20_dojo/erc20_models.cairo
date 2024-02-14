use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Ercbalance {
    #[key]
    token: ContractAddress,
    #[key]
    account: ContractAddress,
    amount: u256,
}

#[derive(Model, Copy, Drop, Serde)]
struct Ercaallowance {
    #[key]
    token: ContractAddress,
    #[key]
    owner: ContractAddress,
    #[key]
    spender: ContractAddress,
    amount: u256,
}

#[derive(Model, Copy, Drop, Serde)]
struct Ercmeta {
    #[key]
    token: ContractAddress,
    name: felt252,
    symbol: felt252,
    total_supply: u256,
}