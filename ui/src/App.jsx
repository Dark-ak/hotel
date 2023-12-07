import { useEffect, useState } from 'react'
import LogIn from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Protected from './components/Protected'

function App() {

  

return (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route path="/" element={
        <Protected>
          <Home />
        </Protected>
      } />

    </Routes>
  </BrowserRouter>
)
}

export default App
