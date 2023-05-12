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
        <div className="card-description">
          <h2>{title}</h2>
          </div>
          <div className="card-localisation">
          <h3>
            {country} < IoLocationSharp />
          </h3>
          </div>
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
  )
}
  
export default Card;