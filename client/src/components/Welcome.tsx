import React from 'react'
import welcomeframe from '../assets/welcomeframe.png'
import { MdRocketLaunch } from 'react-icons/md'

const Welcome = () => {
  const data = [
    {
        name: 'kenzman',
        amount : '145,000'
    },
    {
        name: 'sniper',
        amount : '25,000'
    },
    {
        name: 'flemz',
        amount : '35,000'
    },
    {
        name: 'scooper',
        amount : '2,000'
    },
    {
        name: 'deadlypause',
        amount : '1,000'
    },
    {
        name: 'masher',
        amount : '500'
    },
    {
        name: 'scout',
        amount : '200'
    },
  ]
  
    return (
    <div className='w-[100%] h-[310px] bg-[#100502] rounded-lg flex p-3 space-x-4'>
        <div className='w-[70%] h-[100%]'>
        <img src={welcomeframe} alt='welcom' className='h-full w-full object-cover rounded-lg' />
        </div>
        <div className='h-[100%] w-[30%] bg-[#353D44] rounded-lg p-4'>
                <h1 className='text-[#FFFFFF] nova text-[14px] text-center'>Top winners</h1>
                <div className='h-0.5 w-[100%] bg-[#FFFFFF] flex items-center mt-1'></div>
                <div className='overflow-y-scroll h-[90%]'>
                {data.map((item, index)=>{
                    return  <div key={index} className='flex justify-between w-[90%] h-[40px] text-[13px] nova mt-3 bg-gradient-to-r from-[#0057FF1F] to-[#6F767E00] shadow-2xl p-3 rounded-xl items-center'>
                    <div className="flex text-white">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="text-white">
                        <h1>${item.amount}</h1>
                    </div>
                    </div>
                })}
                </div>
        
        </div>

    </div>
  )
}

export default Welcome