import React from "react";
import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";

type CardProps = {
 id: number;
 country: string;
 picture: string;
 title: String;
 travelerPicture: string;
 travelerUsername: string;
};

const Card = ({ id, country, picture, title, travelerPicture, travelerUsername }: CardProps) => {
  return (
    <>
      <article key={id}>
        <div className="card-title">
          <h2>{title}</h2>
          <h3 className="card-localisation">
            {country} < IoLocationSharp />
          </h3>
        </div>
        <div className="card_travel-image">
          <img
            className="travel-image"
            src={picture}
            alt="voyage"
          />
        </div>
        <div className="card_travel-profil">
          <img
            className="travel-profil"
            src={travelerPicture}
            alt="profil"
          />
          <hr className="line-profil" />
          <h3>commentaire</h3>
          <div className="profil-logo">  
          < IoCameraSharp />
          < IoHeartSharp />
          </div>
        </div>
      </article>
    </>
  );
};
  
export default Card;