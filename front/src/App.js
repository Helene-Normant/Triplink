import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import Inscription from './Pages/inscription/Inscription';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./AuthContext";



function App() {
  return (
    <div className='App'>
       <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home />}/>
        <Route path='/inscription' element= { <Inscription />}/> 
      </Routes>
      </BrowserRouter>
      <ToastContainer />
      </AuthProvider>
  </React.StrictMode>,
    </div>
  );
}

export default App;
