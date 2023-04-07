import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import Inscription from './Pages/inscription/Inscription';
// import Cards from '../Components/cards/Cards';
// import Header from '../Components/header/Header';
// import Searchbar from '../Components/searchbar/Searchbar';
// import Footer from '../Components/footer/Footer';
// import Modal from '../Components/header/modal/Modal';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home />}/>
        <Route path='/inscription' element= { <Inscription />}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
