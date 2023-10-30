import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import './card.css';
import ProfilModal from "./profil-modal/profil-modal";

type CardProps = {

  id: number;
  country: string;
  picture: string;
  title: string;
  travelerPicture: string;
};

const Card = ({ id, country, picture, title, travelerPicture }: CardProps) => {
  let token = localStorage.getItem('apiToken');
  console.log('TOKEN ??', token);

  const [openModalProfil, setOpenModalProfil] = useState(false);

  const handleCLick = () => setOpenModalProfil((previous) => {
    return !previous;
  });

  return (
    <>
      <article key={id} className="card">
        <div className="card-title">
          <div className="card-description">
            <h2>{title}</h2>
          </div>
          <div className="card-localisation">
            <h3>
              {country} < IoLocationSharp />
            </h3>
          </div>
        </div>
        {token ? (
          <Link to={`/details/${id}`}>
            <div className="card_travel-image">
              <img
                className="travel-image"
                src={picture}
                alt="voyage"
              />
            </div>
          </Link>) : (
          <Link to="/inscription">
            <div className="card_travel-image">
              <img
                className="travel-image"
                src={picture}
                alt="voyage"
              />
            </div>
          </Link>
        )
        }
        <div className="card_travel-profil">
          <div className="photo-comment-line-profil">
            <img
              className="travel-profil"
              src={travelerPicture}
              alt="profil"
              onClick={handleCLick}
            />
            <ProfilModal open={openModalProfil} onClose={() => setOpenModalProfil(false)} />
            <hr className="line-profil" />
            <h3>commentaire</h3>
          </div>
          <div className="profil-logo">
            < IoCameraSharp />
            < IoHeartSharp />
          </div>
        </div>
      </article>
    </>
  )
};

export default Card;

