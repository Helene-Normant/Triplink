import React from "react";
import './home.css';
import Cards from '../Components/cards/Cards';
import Searchbar from '../Components/searchbar/Searchbar';
import Footer from '../Components/footer/Footer';
import Modal from '../Components/modal/Modal';
import Header from '../Components/header/Header';

const Home = () => {
  return (
    <>
    <section className='container-home'>
      <Modal />
      <Header />
      <Searchbar />
      <Cards />
    </section>
     <Footer />
     </>
  )
}

export default Home;
