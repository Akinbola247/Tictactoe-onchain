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
import { Link } from 'react-router-dom'

const Partygame = () => {
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
    <div className='w-[100%] h-[500px] bg-[#100502] rounded-lg mt-4'>
        <div className='w-[100%] mx-auto pt-5 px-8'>
                <h1 className='nova text-[25px] text-white border-b-white border-b-[4px] w-[20%]'>Games</h1>
        </div>
        <div className='flex flex-wrap w-[90%] text-white text-center mx-auto mt-4 overflow-y-scroll h-[70%]'>
            {games.map((item, index) =>{
                return <div key={index} className='w-[20%] p-4'>
                  <Link to={`/Game/${item.gameDetails}`}>
                  <Gamecard imagesource={item.imgsource} gamedetails={item.gameDetails} />
                  </Link>  
                </div>
            })}
        </div>
    </div>
  )
}

export default Partygame