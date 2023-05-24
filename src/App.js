import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Conatct from './components/contact/Conatct';
import Footer from './components/footer/Footer';
import Webinars from './components/webinars/Webinars';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Qualification/>
      <Webinars/>
      <Skills/>
      <Conatct/>
      <Footer/>
      
    </main>
    </>
  )
}

export default App