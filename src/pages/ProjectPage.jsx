import React from 'react'
import Sidebar from '../components/Sidebar'
import Projects from '../components/Projects'

const ProjectPage = () => {
    return (
        <div>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Projects />
            </main>
        </div>
    )
}

export default ProjectPage