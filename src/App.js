import React from 'react'
import Main from './page/main'
import StartGame from './page/StartGame'
import Level from './page/Level'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route excat path="/" element={<StartGame/>}  />
        <Route path="/main" element={<Main/>}  />
        <Route path="/level" element={<Level/>}  />
      </Routes>
    </>
  )
}

export default App