import React, { useState, useEffect } from "react";
import './travelDetails.css';
import { FaEuroSign } from "react-icons/fa";
import apiService from "../../apiService.js";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import hello from "../../assets/wave-hand.svg";



type User = {
  picture: string,
  username: string,
};

export type TravelType = {
  id: number;
  categoryFr: string;
  categoryEn: string;
}

type TravelPartner = {
  id: number;
  partnerFR: string;
  partnerEN: string;
}

type Publication = {
  createdAt: string,
  travelPartner: TravelPartner,
  description: string;
  travelType: TravelType,
  bagTips: string;
  id: string;
  traveler: User;
  budget: number;
}

const TravelDetail = () => {
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [details, setDetails] = useState<Publication | null>();
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString('fr-FR');
    return formattedDate;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const publicationApi = async () => {
    try {
      setLoading(true);
      const detailsData = await apiService.Publications.get(id);
      setDetails(detailsData);
      setLoading(false);
      console.log(detailsData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    publicationApi();
  },
    // eslint-disable-next-line
    []);

  if (!details) {
    return null;
  }

  if (loading) {
    return <div>
      <Loading />
    </div>
  }


  return (
    <section className="detail-wrapper">
      <div className="info-travel-container">
        <div className="info-publication">
          <div className="info-details-profil">
            <img className="info-icon" src={details.traveler?.picture} alt={"Profil Icon"} />
            <div className="info-date">
              <h2 className="info-profil">Publié par {details.traveler?.username}</h2>
              <h3>Le {formatDate(details.createdAt)}</h3>
            </div>
          </div>
        </div>

        <div className="info-contact-travel">
          <div className="info-detail-travel">
            <div className="info-price">
              <FaEuroSign /> <FaEuroSign />
              {details.budget}
            </div>
            <div className="info-type">
            {details.travelType.categoryFr}
            </div>
            <div className="info-tribu">
              {details.travelPartner.partnerFR}
            </div>
          </div>
          <div className="info-contact-details">
            <div className={`header-contact ${menuOpen ? 'open' : ''}`}>
              <div className="contact-icon" onClick={toggleMenu}>
                <h3 className="info-dropdown"> . . .</h3>
              </div>
              <ul className={`contact-items ${menuOpen ? 'open' : ''}`}>
                <li className="contact-cat top"> <h1>Suivre</h1></li>
                <li className="contact-cat"><h1>Contacter</h1></li>
                <li className="contact-cat-fav">
                  <h1>Favoris</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="info-detail-description">
          <div className="info-description">
            <h3>
              {details.description}
            </h3>
          </div>
          <div className="info-pack">
            <h1>À avoir dans son sac</h1>
            <h3>
              {details.bagTips}
            </h3>
          </div>
        </div>

        <div className="info-contact">
          <div className="info-hello">
            {/* <PiHandWaving /> */}
          </div>
          <div className="info-contact-me">
            <h1>
              <img src={hello} alt="rencontre" />
             Partant.e pour de nouvelles aventures
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelDetail;
