import React from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <div>
      <aside>
        <Sidebar/>
      </aside>
      <main>
       <About/>
      </main>
    </div>
  )
}

export default App