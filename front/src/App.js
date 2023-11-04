import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inscription from './pages/inscription/Inscription';
import { ToastContainer } from 'react-toastify';
import Details from './pages/Details';



function App() {
  return (
    <div className='App'>
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/inscription' element= {<Inscription />}/> 
        <Route path='/details/:id/' element= {<Details />} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
  </React.StrictMode>
    </div>
  );
}

export default App;
