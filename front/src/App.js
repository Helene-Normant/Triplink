import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import Inscription from './Pages/inscription/Inscription';
import { ToastContainer } from 'react-toastify';
import Details from './Pages/Details';



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
