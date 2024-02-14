import React, { useState } from 'react'
import { Spinner, Center } from '@chakra-ui/react';
import { useDojo } from "../DojoContext";
import { useAppContext } from '../context/Appcontext';
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useComponentValue } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import {Buffer} from 'buffer';
import { ethers } from 'ethers';





const Result = () => {
//   const [playerone, setplayerone] = useState('');
//   const [playertwo, setplayertwo] = useState('');
  const [gaemeid, setGameID] = useState('')
  const {setresultdialog,winningresult,sharedgameID,playerone,playertwo} = useAppContext()
  const {
    setup: {
      systemCalls: { initiate, spawnavatar, registerPlayer, restart,getplayerdet,play},
      components : {Moves,Board,Response,Game,Gate,Players,Fixed},
    },
    account: { create, list, select, account, isDeploying, clear},
  } = useDojo();  


  const handlerestart = async () =>{
  restart(account,sharedgameID,playerone,playertwo)
  setresultdialog(false)
    
    }

  return (
    <Center
    position="fixed"
    top="0"
    left="0"
    width="100%"
    height="100%"
    backgroundColor="rgba(0, 0, 0, 0.8)" 
    zIndex="9999"
  >
    <div className=' mt-20 h-[230px] w-[300px] bg-[#D7D8EC] rounded-xl text-center space-y-2 bg-red p-4'>
    <h1 className='mt-[20%] press text-[14px]'>{winningresult}</h1>
    <div className='w-[90%] h-[45px] search mx-auto rounded-2xl items-center'>
              
                  <div className='flex space-x-3'>
                  <div className='flex bg-[#FF3D00] w-[140px]  mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer ' onClick={()=>(handlerestart())}>
                    <h1 className='press text-[10px] text-[#FFFFFF] text-center w-[100%] ' >Restart</h1>
                 </div>
                 <div className='flex bg-[#FF3D00] w-[140px]  mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer '>
                    <h1 className='press text-[10px] text-[#FFFFFF] text-center w-[100%] ' onClick={()=>(setresultdialog(false))}>Quit</h1>
                 </div>
                  </div>
            </div>
    </div>
   
  </Center>
  )
}

export default Result