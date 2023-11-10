import React from "react";
import './home.css';
import Cards, { Country } from '../../components/cards/cards';
import Searchbar from '../../components/searchbar/searchbar';

import Footer from '../../components/footer/footer';
import LoginModal from '../../components/login-modal/login-modal';
import Header from '../../components/header/header';
import { useState } from "react";
import { TravelType } from '../details/travel-details';

const Home = () => {
  const [destination, setDestination] = useState<Country>();
  const [category, setCategory] = useState<TravelType>();
  const [profil, setProfil] = useState<string>();

  return (
    <>
      <section className='container-home'>
        <LoginModal isOpen={false} onClose={() => { }} /> {/* à changer */}
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
