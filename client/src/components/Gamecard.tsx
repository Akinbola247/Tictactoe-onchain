/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

interface CardProp {
    imagesource : any,
    gamedetails : string
}

const Gamecard : React.FC<CardProp> = ({ imagesource, gamedetails }) => {
  return (
    <div className='border p-2 border-[#FF3D00] rounded-lg items-center w-[100%] mx-auto bg-cover'>
        <img src={imagesource} alt='' height='150px' width='150px' className='mx-auto' />
        <p className='nova mt-1'>{gamedetails} </p>
    </div>
  )
}

export default Gamecard