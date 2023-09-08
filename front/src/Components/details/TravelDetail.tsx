import React, { useState } from "react";
import './travelDetails.css';
import profil from "../../assets/profil.png";
import { FaEuroSign } from "react-icons/fa";
import { GiBackpack } from "react-icons/gi";
import { PiHandWaving } from "react-icons/pi";

const TravelDetail = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="info-travel-container">
    <div className="info-publication">
      <div className="info-details-profil">
        <img className="info-icon" src={profil} alt={"Profil Icon"} />
      <div className="info-date">
        <h2 className="info-profil">Publié par julie</h2>
        <h3>Le 25/05/2023</h3>
      </div>
      </div>
    </div>

<div className="info-contact-travel">
    <div className="info-detail-travel">
      <div className="info-price">
       <FaEuroSign/> <FaEuroSign/>
       </div>
       <div className="info-type">
       <GiBackpack/>
       </div>
       <div className="info-tribu">
       <h1>En famille</h1>
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
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic to make a type specimen book. 
        </h3>
      </div>
      <div className="info-pack">
        <h1>À avoir dans son sac</h1>
        <h3>
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic to make a type specimen book. 
        </h3>
      </div>
    </div>

    <div className="info-contact">
        <div className="info-hello">
          <PiHandWaving/>
        </div>
       <div className="info-contact-me">
        <h1>
         Partant.e pour de nouvelles aventures 
        </h1>
      </div>
      </div>
  </div>
  )
}

export default TravelDetail;