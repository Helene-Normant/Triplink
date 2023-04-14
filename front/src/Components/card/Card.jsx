import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";

const Card = ({ card, id, spot, image, title, photo, profil }) => {
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