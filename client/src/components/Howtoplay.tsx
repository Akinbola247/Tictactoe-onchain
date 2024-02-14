import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'

const Howtoplay = () => {
  return (
    <div className='h-[340px] bg-[#FF3D00]'>
            <div className=' text-center w-[600px] mx-auto pt-5'>
                <h1 className='nova text-[25px] text-[#FFFFFF] border-b-[#FFFFFF] border-b-[4px] w-[30%] mx-auto'>How to Play</h1>
                <p className='text-[#FFFFFF] mt-2 nova'>Challenge your skills, strategize your moves, and enjoy the thrill of competing against friends or players from around the world. Start your gaming adventure at Sanmoku Dojo and unleash the joy of playing</p>
            </div>
            <div className='flex justify-between px-10 py-6'>
            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={one} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP ONE</h1>
                <p className='mt-2'>Launch app and Choose a game of choice </p>
            </div>
            
            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={two} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP TW0</h1>
                <p className='mt-2'>Start a new game and Share your room ID with your opponent to play</p>
            </div>

            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={three} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP THREE</h1>
                <p className='mt-2'>On every win, There's increment in token earned</p>
            </div>

            <div className='w-[250px] text-center nova text-[#FFFFFF]'>
                <img src={four} alt='one' height='40px' width='40px' className='mx-auto' />
                <h1 className='mt-1'>STEP FOUR</h1>
                <p className='mt-2'>Enjoy fully onchain board games</p>
            </div>
            </div>
    </div>
  )
}

export default Howtoplay