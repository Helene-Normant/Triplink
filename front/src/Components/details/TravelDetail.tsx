import React, { useState, useEffect } from "react";
import './travelDetails.css';
import { FaEuroSign } from "react-icons/fa";
import { GiBackpack } from "react-icons/gi";
import { PiHandWaving } from "react-icons/pi";
import apiService from "../../apiService.js";

type User = {
  picture: string,
  username: string,
};

type Publication = {
  createdAt: string,
  travelPartner: string,
  description: string;
  bagTips: string;
  traveler: User;
}

const TravelDetail = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [details, setDetails] = useState<Publication | null>();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);
  
    const formatDate = (dateString : string) => {
      const formattedDate = new Date(dateString).toLocaleDateString('fr-FR');
      return formattedDate;
    }
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const publicationApi = async () => {
      try {
        setLoading(true);
        const detailsData = await apiService.Publications.get(35);
        setDetails(detailsData);
        console.log(detailsData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      publicationApi();
    }, []);

    if (!details) {
      return null;
    }
  
  return (
  <section className="detail-wrapper" id="details">
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
       <FaEuroSign/> <FaEuroSign/>
       </div>
       <div className="info-type">
       {/* <GiBackpack/>  */} {details.travelType}
       </div>
       <div className="info-tribu">
       <h1>{details.travelPartner}</h1>
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
        {details.bagTips} Existe pas ?
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
  </section>
  )
}

export default TravelDetail;
