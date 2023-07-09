import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import Inscription from './Pages/inscription/Inscription';
import Profil from './Pages/profil/Profil'
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home />}/>
        <Route path='/inscription' element= { <Inscription />}/> 
        <Route path='/profil' element= { <Profil />}/> 
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
