# TIC TAC TOE ON CHAIN

## Game Features 
- Multiplayer tictactoe
- Token dojo compatible erc20 mint to player on every Victory
- Equivalent erc20 token to be sent to argent wallet

## how to run game:
requirements
- sozo cli 
- dojo v 0.5.1 
- torii 
- katana

## process 
run 
```shell 
katana --disable-fee
```
on a separate terminal 
run 
```shell 
cd contract
sozo migrate 
```
on another terminal 
run 
```shell 
torii --world <world address>
```
on a separate terminal 
run 
```shell
cd client
npm i
npm run dev 
```

on a separate terminal, run this script 
```shell
sh contracts/scripts/default_auth.sh
```

## To do
- bug fixes