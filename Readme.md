# TIC TAC TOE ON CHAIN

## Games currently on the platform 
- Multiplayer tictactoe

## todo
Mobile responsiveness
Read erc20 data

## how to run game:
requirements
- sozo cli 
- dojo engine running 
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