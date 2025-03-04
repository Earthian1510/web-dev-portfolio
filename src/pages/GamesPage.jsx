import React from 'react'
import Sidebar from '../components/Sidebar'
import SnakeGame from '../components/Games/SnakeGame'

const GamesPage = () => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <h1>Snake Game</h1>
                <SnakeGame />
            </main>
        </div>
    )
}

export default GamesPage