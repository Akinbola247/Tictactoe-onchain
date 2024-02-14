import React,{useState, useEffect} from 'react'
import { Spinner, Center } from '@chakra-ui/react';
import { useDojo } from "../DojoContext";
import { useAppContext } from '../context/Appcontext';




const Register = () => {
  const [selectedAvatar, setSelected] = useState(0)
  const [xbackgroundColor, setXBackgroundColor] = useState(false);
  const [obackgroundColor, setOBackgroundColor] = useState(false);
  const [gameID, setgameID] = useState('');
  const { setSharedavatar,setavatardialog,sharedgameID} = useAppContext()
  
  const {
    setup: {
      systemCalls: { initiate, spawnavatar,getplayerdet, registerPlayer, restart },
      components : {Moves,Board,Game,Gate,Players,Fixed},
    },
    account: { create, list, select, account, isDeploying, clear},
  } = useDojo();

const handleXSelection = () =>{
  setSelected(1)
  setXBackgroundColor(true)
  setOBackgroundColor(false)
  setSharedavatar('X')
}
const handleOSelection = () =>{
  setSelected(2)
  setXBackgroundColor(false)
  setOBackgroundColor(true)
  setSharedavatar('O')
}
const handleAvatarSpawn = async () =>{
  // getplayerdet(account)
  await spawnavatar(account,selectedAvatar,sharedgameID, (list()[0].address).toString())
  console.log('shared',sharedgameID.toString() )
  console.log('set',gameID )
  console.log((list()[0].address).toString())
  setavatardialog(false) 
}
useEffect(() => {
  setgameID(sharedgameID)
}, [sharedgameID])

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
    <h1 className='mt-[6%] press'>Choose your Avatar</h1>
    <div className='w-[90%] h-[45px] search mx-auto rounded-2xl items-center'>
                <div className='flex space-x-4 press w-[100%] h-[70%] mx-auto my-[7%]'>
                    <div className='border-r border-r-black w-[50%] cursor-pointer px-2 ' onClick={handleXSelection} style={xbackgroundColor ? {backgroundColor: 'grey'} : {backgroundColor: ''}}>X</div>
                    <div className='w-[50%] cursor-pointer' onClick={handleOSelection} style={obackgroundColor ? {backgroundColor: 'grey'} : {backgroundColor: ''}}>O</div>
                </div>
                  <div className='flex bg-[#FF3D00] w-[140px]  mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer'>
                <h1 className='press text-[10px] text-[#FFFFFF] text-center w-[100%]' onClick={handleAvatarSpawn}>Start</h1>
                 </div>
            </div>
    </div>
   
  </Center>
  )
}

export default Register