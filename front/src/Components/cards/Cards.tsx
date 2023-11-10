import React from "react";
import { useState, useEffect } from 'react';
import "./cards.css";
import apiService from "../../apiService.js";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import { ImCross } from "react-icons/im";
import { TravelType } from '../details/TravelDetail';

type Traveler = {
  id: number;
  username: string;
  picture: string;
}

export type Country = {
  id: number;
  nameFr: string;
  nameEn: string;
}

type CardsProps = {
  destination?: Country;
  category?: TravelType;
  profil?: string;
};


type ApiCard = {
  id: number;
  country: Country;
  travelType: TravelType;
  picture: string;
  title: string;
  photo: string;
  profil: string;
  traveler: Traveler;
}

const Cards = ({ destination, category, profil }: CardsProps) => {
  const [apiCards, setApiCards] = useState<ApiCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [displayCards, setDisplayCards] = useState<ApiCard[]>([]);


  const fetchPublications = async () => {
    try {
      setLoading(true);
      const cardsData = await apiService.Publications.getAll();
      setApiCards(cardsData);
      setDisplayCards(cardsData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filterCards = (newDestination?: Country, newCategory?: TravelType, newProfil?: string) => {
    setDisplayCards(apiCards.filter(
      (card) => {
        const destinationMatch = !newDestination || (card.country.id === newDestination.id);
        const categoryMatch = !newCategory || (card.travelType.id === newCategory.id);
        const profilMatch = !newProfil || (card.traveler.username === newProfil);

        return destinationMatch && categoryMatch && profilMatch;
      }
    ));
  }

  useEffect(() => {
    const initialLoad = async () => {
      await fetchPublications();
    }

    initialLoad();
  }, []);

  useEffect(() => {
    filterCards(destination, category, profil);

    // eslint-disable-next-line
  }, [category, destination, profil]);

  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <section className="card-wrapper" id="travels" data-testid="cards-component">
      <div className="container_travel-cards">
        {!displayCards.length &&
          <div className="no-result-container">
            <div className="no-result-message">
              <h2>PAS DE RESULTATS</h2>
            </div>
            <div className="no-result-icon">
              <ImCross />
            </div>
          </div>}
        {displayCards.map(({ id, country, picture, title, traveler }: ApiCard) => {
          return (
            <Card
              key={id}
              id={id}
              country={country.nameFr}
              picture={picture.split(',')[0]}
              title={title}
              travelerPicture={traveler.picture}
            />
          );
        })}
      </div>
    </section>
  )
};

export default Cards;
