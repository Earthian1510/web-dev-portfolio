import React from 'react'
import Sidebar from '../components/Sidebar'
import Music from '../components/Music'

const MusicPage = () => {
  return (
    <div>
         <div>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Music />
            </main>
        </div>
    </div>
  )
}

export default MusicPage