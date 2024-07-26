import React, { useEffect, useState } from 'react'
import Header from './component/Header';
import Homepage from "./page/main/homepage/Homepage.jsx"
import "./styles.css"
const App = () => {

  return (
    <div className='full-screen'>
      <Header />
      <Homepage />
    </div>
  )
}

export default App
// STATE EFFECT -> QUA -> DUNG DU LIEU
// COMPONENNT -> PROP
// context 