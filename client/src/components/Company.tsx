import React from 'react'
import frame from '../assets/Frame202.png'

const Company = () => {
  return (
    <div className='h-[230px] w-[80%] mx-auto p-6'>
        <div className='flex space-x-24'>
        <div className='w-[200px] my-[10px]'>
            <img src={frame} alt='logo' className='mt-[20%]'/>
        </div>
          <div className='flex'>
              <div className='w-[200px] '>
                <h1 className='mb-4 nova text-[24px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
              </div>
              <div  className='w-[200px]'>
              <h1 className='mb-4 nova text-[24px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
                <h1 className='nova text-[14px]'>Lorem</h1>
              </div>
              <div className='w-[200px]'>
              <h1 className='mb-4 nova text-[24px]'>Lorem</h1>
                <p className='nova text-[14px]'>Lorem ipsum dolor sit amet consectetur. Ut commodo amet accumsan blandit suscipit diam sed morbi elit. Eleifend egestas in tempus aliquet.</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Company