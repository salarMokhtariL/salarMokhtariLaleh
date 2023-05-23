import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Conatct from './components/contact/Conatct';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Qualification/>
      <Skills/>
      <Conatct/>
      
    </main>
    </>
  )
}

export default App