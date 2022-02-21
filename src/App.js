import React from 'react';
// import header
import Header from './components/header.js';
// import hero
import Hero from './components/hero.js';
// import browse
import Browse from './components/browse.js';
// import justArrived
import Justarrived from './components/justArrived.js';

import './tailwind/style.css';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Browse/>
    <Justarrived/>
    
    </>
  );
}

export default App;
