#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

export RPC_URL="https://api.cartridge.gg/x/tictactoe/katana";

export WORLD_ADDRESS=0x6b79a1ed7d1a3fc08ef8586eb67cde129fba32bf10586a50a1ec9380973c580

export ACTIONS_ADDRESS=0xaf9f546660a7282b6363eb29c355119a539c856943d3b79cf824dfe03e4998
export ERC_ADDRESS=0x74113515dcc9fbe74854398c6315f616a41cc0f7e0935f452a648b75b724093

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