import React from 'react'
import {Routes ,Route, Outlet } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/Navigation.component'
import './App.scss'



const Shop = () => {
  return (
    <h1>Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  )
}

export default App