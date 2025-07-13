import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Room from './Room'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomId' element={<Room/>}/>
      </Routes>
    </div>
  )
}

export default App
