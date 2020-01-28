import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movieredux from './Movieredux/Movieredux';
// import { Modale } from 'react-bootstrap'
import Modale from './modal/Modal'
import Recherche from './Movieredux/Recherche';
function Home() {
 
  return (
    <div className="App">
      <Recherche />
     <Movieredux />
    {/* <button onClick={ <Modale/>}>+</button> */}
    <Modale />
    {/* <Modal /> */}
    </div>
  );
}

export default Home;
