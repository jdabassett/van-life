import './App.css';

//import tools and components
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components'

//import styled components


//import custom components
import Vans from './pages/Vans.js'
import About from './pages/About.js'
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Vans/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}


