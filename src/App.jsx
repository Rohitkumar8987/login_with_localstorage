import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Signup from './Components/Register/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}
