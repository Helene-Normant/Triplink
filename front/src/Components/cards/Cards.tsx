import React from "react";
import { useState, useEffect } from 'react';
import "./cards.css";
import apiService from "../../apiService.js";
import Card from "../card/Card";


type Traveler = {
  id: number;
  username: string;
  picture: string;
}

type CardsProps = {
  id: number;
  country: string;
  picture: string;
  title: string;
  photo: string;
  profil: string;
  traveler: Traveler;
};

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const publicationsApi = async () => {
    try {
      setLoading(true);
      const cardsData = await apiService.Publications.getAll();
      setCards(cardsData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    publicationsApi();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <section className="card-wrapper" id="travels">
      <div className="container_travel-cards">
        {cards.map(({ id, country, picture, title, traveler }: CardsProps) => {
          return (
            <Card
              id={id}
              country={country}
              picture={picture}
              title={title}
              travelerPicture={traveler.picture}
              travelerUsername={traveler.username}
            />
          );
        })}
      </div>
    </section>
  )
};

export default Cards;
