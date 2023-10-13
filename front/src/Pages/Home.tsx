import React from "react";
import './home.css';
import Cards, { Country } from '../Components/cards/Cards';
import Searchbar from '../Components/searchbar/Searchbar';

import Footer from '../Components/footer/Footer';
import Modal from '../Components/modal/LoginModal';
import Header from '../Components/header/Header';
import { useState } from "react";


const Home = () => {
  const [destination, setDestination] = useState<Country>();
  const [category, setCategory] = useState<string>();
  const [profil, setProfil] = useState<string>();

  return (
    <>
      <section className='container-home'>
        <Modal isOpen={false} onClose={() => { }} /> {/* à changer */}
        <Header />
        <Searchbar
          setDestination={setDestination}
          setCategory={setCategory}
          setProfil={setProfil}
        />
        <Cards
          destination={destination}
          category={category}
          profil={profil}
        />
      </section>
      <Footer />
    </>
  )
}

export default Home;
