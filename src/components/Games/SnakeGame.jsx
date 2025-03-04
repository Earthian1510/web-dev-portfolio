import React from 'react'
import './SnakeGame.css'


const SnakeGame = () => {
const GRID_SIZE = 15;
const GAME_GRID = Array.from({ length: GRID_SIZE}, () => new Array(GRID_SIZE).fill(""))


  return (
    <div className='game-container'>
        {
            GAME_GRID.map((row, yc) => {
                return row.map((cell, xc) => {
                    return <div className='cell'></div>
                })
            })
        }
    </div>
  )
}

export default SnakeGame
