import React from 'react'
import Sidebar from '../components/Sidebar'
import Artworks from '../components/Artworks'

const ArtworkPage = () => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Artworks />
            </main>
        </div>
    )
}

export default ArtworkPage