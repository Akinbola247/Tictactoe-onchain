#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export RPC_URL="https://api.cartridge.gg/x/sanmokuv3/katana";

export WORLD_ADDRESS=$(cat /Users/kenzman/Desktop/dojojam/Sanmoku-dojo/contracts/target/release/manifest.json | jq -r '.world.address')

export ACTIONS_ADDRESS=$(cat /Users/kenzman/Desktop/dojojam/Sanmoku-dojo/contracts/target/release/manifest.json | jq -r '.contracts[] | select(.name == "sanmoku::actions::actions" ).address')
export ERC_ADDRESS=$(cat /Users/kenzman/Desktop/dojojam/Sanmoku-dojo/contracts/target/release/manifest.json | jq -r '.contracts[] | select(.name == "sanmoku::erc20_dojo::erc20::erc_systems" ).address')

echo "---------------------------------------------------------------------------"
echo world : $WORLD_ADDRESS 
echo " "
echo actions : $ACTIONS_ADDRESS
echo " "
echo actions : $ERC_ADDRESS
echo "---------------------------------------------------------------------------"

# enable system -> component authorizations
COMPONENTS=("Board" "Ercaallowance" "Ercbalance" "Ercmeta" "Game" "Gate" "Moves" "Players" "Fixed" "Response" )

for component in ${COMPONENTS[@]}; do
    sozo auth writer $component $ACTIONS_ADDRESS --world $WORLD_ADDRESS --rpc-url $RPC_URL
    sozo auth writer $component $ERC_ADDRESS --world $WORLD_ADDRESS --rpc-url $RPC_URL
done

echo "Default authorizations have been successfully set."