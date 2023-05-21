import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
    </main>
    </>
  )
}

export default App