// import IMG1 from "../../assets/card.png";
// import profil from "../../assets/profil.png";
import { useState } from "react";
import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import OutsideClickHandler from 'react-outside-click-handler';
import ProfilModal from "./profil-modal/ProfilModal";

const Card = ({ card, id, spot, image, title, photo, profil }) => {
  let [showInfo1, setShowInfo1] = useState(false);

  return (
    <>
      <article key={id} className={card}>
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
            onClick={() => {setShowInfo1(true)}}
          />
          <OutsideClickHandler onOutsideClick={() => {setShowInfo1(false)}}>
            <ProfilModal show={showInfo1}  />
          </OutsideClickHandler>
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