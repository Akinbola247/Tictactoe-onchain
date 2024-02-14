import React from 'react'
import Gamecard from './Gamecard'
import tic from '../assets/Tictactoe.png'
import chess from '../assets/chess.png'
import sudoku from '../assets/sudoku.png'
import sequence from '../assets/sequence.png'
import mancala from '../assets/Mancala.png'
import novelty from '../assets/novelty.png'
import drinknopoly from '../assets/drinknopoly.png'
import ping from '../assets/Ping.png'

const Upcoming = () => {
    const games = [
        {
            id : 1,
            imgsource : tic,
            gameDetails : 'Tic tac toe'
        },
        {
            id : 2,
            imgsource : chess,
            gameDetails : 'Onchain Chess'
        },
        {
            id : 3,
            imgsource : sudoku,
            gameDetails : 'Sudoku game'
        },
        {
            id : 4,
            imgsource : sequence,
            gameDetails : 'Sequence game'
        },
        {
            id : 5,
            imgsource : mancala,
            gameDetails : 'Onchain Mancala'
        },
        {
            id : 6,
            imgsource : novelty,
            gameDetails : 'Novelty game'
        },
        {
            id : 7,
            imgsource : drinknopoly,
            gameDetails : 'Drink nopoly'
        },
        {
            id : 8,
            imgsource : ping,
            gameDetails : 'Onchain Ping'
        },
    ]
  return (
    <div className='h-[540px] bg-[#D0D1E5]'>
         <div className=' text-center w-[600px] mx-auto pt-5'>
                <h1 className='nova text-[25px] text-[#131212] border-b-[#131212] border-b-[4px] w-[20%] mx-auto'>Games</h1>
        </div>
        <div className='flex flex-wrap w-[90%] text-center mx-auto mt-4 bg-[#FFFFFF] rounded-lg p-4'>
            {games.map((item, index) =>{
                return <div key={index} className='w-[25%] p-4'>
                    <Gamecard imagesource={item.imgsource} gamedetails={item.gameDetails} />
                </div>
            })}
        <div className='flex justify-end mt-2 w-[100%]'>See all</div>
        </div>
    </div>
  )
}

export default Upcoming