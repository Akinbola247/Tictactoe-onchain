import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-[300px] bg-[#FF3D00]'>
          <div className=' text-center w-[50%] mx-auto pt-5'>
                <h1 className='nova text-[25px] text-[#FFFFFF] border-b-[#FFFFFF] border-b-[4px] w-[30%] mx-auto'>About Us</h1>
                <p className='text-[#FFFFFF] mt-2 nova'>Welcome to Sanmoku Dojo, where innovation meets entertainment! We take pride in being a premier platform offering a thrilling range of fully on-chain multiplayer board games. At Sanmoku Dojo, we've reimagined gaming by harnessing the power of Dojo engine and starknet to bring you an immersive gaming experience like no other.</p>
                <div className='w-[70%] h-[55px] bg-[#FFFFFF] mx-auto mt-8 rounded-2xl items-center'>
                <form className='h-[100%] w-[96%] mx-auto items-center p-1'>
                    <div className='h-[100%] flex text-center'>
                    <input
                        type="text"
                        // value={inputValue}
                        // onChange={handleInputChange}
                        placeholder="Enter your text here..."
                        className='w-[60%] h-full border-[#000000B2] rounded-l-lg border px-2 inner'
                    />
                    <button type="submit" className='w-[40%] h-full border-[#000000B2] text-white rounded-r-lg border bg-[#FF3D00] press'>Submit</button>
                    </div>
                    
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Newsletter