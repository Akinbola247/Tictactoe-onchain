import { SetupNetworkResult } from "./setupNetwork";
import { Account } from "starknet";
import { Entity, getComponentValue } from "@dojoengine/recs";
import { uuid } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
// import { Direction, updatePositionWithDirection } from "../utils";
import {getEntityIdFromKeys, getEvents, setComponentsFromEvents } from "@dojoengine/utils";
import { useAppContext } from '../context/Appcontext';


export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  
  { execute, contractComponents, provider, }: SetupNetworkResult,
  { Board, Ercaallowance,Ercbalance,Ercmeta,Game,Gate,Moves,Players,Fixed }: ClientComponents
 ) {

  
  const initiate = async (signer: Account, player1 : string, player2: string ) => {
      
    try {
      const tx = await execute(signer, "actions", "initiate_game", [
        player1,
        player2,
      ]);

       const events = getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      // console.log('initiate is',events)
      console.log('tx', tx)
      console.log('event', events[0].data[5])
      return events[0].data[5]
    } catch (e) {
      console.log(e);
    }

  };

  const spawnavatar = async (signer: Account, avatar : number, gameid: string, playeraddress : string) => {
    try {
      const tx = await execute(signer, "actions", "spawn", [
        avatar,
        gameid,
        playeraddress,
      ]);
      const events = getEvents(
        await signer.waitForTransaction(tx.transaction_hash, {
          retryInterval: 100,
        })
      )
    console.log('tx', tx)
    console.log('event', events)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  const registerPlayer = async (signer: Account, name : string, player: string) => {
      try {
      const tx = await execute(signer, "actions", "register_player", [
        name,
        player
      ]);
      const events = setComponentsFromEvents(
        contractComponents,
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
      );
      console.log('register is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  const getplayerdet = async (signer: Account) => {
    // const entityId = signer.address.toString() as Entity;
    try {
      const tx = await execute(signer, "actions", "playerstatus", ["0x525e2c34d60d7df99ae703290992ada10699abac1c755b05af2c8e0231032c3"]);
      const events = 
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
    console.log('getplayer is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (error) {
      console.log(error);
    }
  }

  const play = async (signer: Account, gameid : string, spot: number, player:string) =>{
    try {
      const tx = await execute(signer, "actions", "play_game", [gameid,spot,player]);
      const events = 
        getEvents(
          await signer.waitForTransaction(tx.transaction_hash, {
            retryInterval: 100,
          })
        )
    console.log('getplayer is',events)
      console.log('tx', tx)
      // return events[0].data[2]
    } catch (error) {
      console.log(error);
    }
  }

  const restart = async (signer: Account, gameid : string, player1 : string, player2: string) => {
    // mint
    try {
      const tx = await execute(signer, "actions", "restart_game", [
        gameid,
        player1,
        player2
      ]);
      const events = getEvents(
        await signer.waitForTransaction(tx.transaction_hash, {
          retryInterval: 100,
        })
      );
      console.log(tx)
      console.log('restart',events)
      // return events[0].data[2]
    } catch (e) {
      console.log(e);
    }

  };

  return {
    initiate,
    spawnavatar,
    registerPlayer,
    restart,
    getplayerdet,
    play
  };
}
