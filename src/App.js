import React from 'react';
import './App.css';
// import Description from './Movie/Description'
import Description from './Movieredux/Description'
import Home from './Home'
import {Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
            <Route  exact path='/' component={Home}/>
            <Route exact path='/:id' component={Description}/>
            
    </div>
  )
}
