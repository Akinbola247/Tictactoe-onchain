import React, { useState } from 'react'
import { Spinner, Center } from '@chakra-ui/react';
import { useAppContext } from '../context/Appcontext';
import { useDojo } from "../DojoContext";




const Joingame = () => {
  const [input, setInputId] = useState('')
  const {setjoindialog,setjoininput,setjoininputdialog} = useAppContext()
  const {
    setup: {
      systemCalls: { initiate, spawnavatar, registerPlayer, restart,getplayerdet},
      components : {Moves,Board,Game,Gate,Players,Fixed},
    },
    account: { create, list, select, account, isDeploying, clear},
  } = useDojo();
  
  const handlejoinGame = () =>{
    // spawnavatar(account,2,input, (list()[1].address).toString())
    setjoininputdialog(true)
    setjoindialog(false)
    console.log('joined');
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // setInputId(event.target.value)
    setjoininput(event.target.value)
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
    <div className=' mt-20 h-[200px] w-[400px] bg-[#D7D8EC] rounded-xl text-center space-y-2 bg-red p-4'>
    <h1 className='mt-[6%] press'>Join Game</h1>
    <div className='w-[90%] h-[45px] search mx-auto rounded-2xl items-center'>
                <form className='h-[100%] w-[96%] mx-auto items-center p-1'>
                    <div className='h-[100%] text-center'>
                    <input
                        type="text"
                        // value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Game ID"
                        className='w-[100%] h-full px-2 rounded-lg items-center'
                    />
                    </div>  
                            
                    </form>
                    <div className='flex space-x-3'>
                  <div className='flex bg-[#FF3D00] w-[140px]  mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer 'onClick={handlejoinGame}>
                    <h1 className='press text-[10px] text-[#FFFFFF] text-center w-[100%] ' >Next</h1>
                 </div>
                 <div className='flex bg-[#FF3D00] w-[140px]  mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer 'onClick={()=>(setjoindialog(false))}>
                    <h1 className='press text-[10px] text-[#FFFFFF] text-center w-[100%] '>Cancel</h1>
                 </div>
                  </div>
            </div>
    </div>
   
  </Center>
  )
}

export default Joingame