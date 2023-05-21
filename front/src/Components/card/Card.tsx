import React, { useState } from "react";
import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";
// import ModalProfil from "../cards/ModalProfil/ModalProfil";
import './card.css';
import ProfilModal from "./profil-modal/ProfilModal";

type CardProps = {
  card: string;
  id: number;
  spot: string;
  image: string;
  title: String;
  photo: string;
  profil: string;
};

const Card = ({ card, id, spot, image, title, photo, profil }: CardProps) => {
  const [openModalProfil, setOpenModalProfil] = useState(false);
  const handleCLick = () => setOpenModalProfil((previous) => {
    return !previous;
  });

  return (
    <article key={id} className={`${card} card`}>
      <div className="card-title">
        <h2>{title}</h2>
        <h3 className="card-localisation">
          {spot} < IoLocationSharp />
        </h3>
      </div>
      <div className="card_travel-image">
        <img
          className="travel-image"
          src={image}
          alt="voyage"
        />
      </div>
      <div className="card_travel-profil">
        <img
          className="travel-profil"
          src={photo}
          alt="profil"
          onClick={handleCLick}
        />
        {/* <ModalProfil open={openModalProfil} onClose={() => setOpenModalProfil(false)} /> */}
        <ProfilModal open={openModalProfil} onClose={() => setOpenModalProfil(false)} />
        <hr className="line-profil" />
        <h3>commentaire</h3>
        <div className="profil-logo">
          < IoCameraSharp />
          < IoHeartSharp />
        </div>
      </div>
    </article>
  );
};

export default Card;
