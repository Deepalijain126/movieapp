import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from "./Home";
import "./App.css";
 import Singlemovie from './Singlemovie';
 import Error from './Error';

const App = () => {
  return (
<>

    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path = "movie/:id" element ={<Singlemovie></Singlemovie>}/>
        <Route path = "*"  element={<Error></Error>}/>
        
    </Routes>
    
</>
  );
  }

export default App
