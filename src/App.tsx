import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.page'

const App: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      Hello World
      {/* Wrapper */}
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App