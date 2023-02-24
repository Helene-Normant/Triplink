import "./cards.css";
import IMG1 from "../../assets/card.png";
import profil from "../../assets/profil.png";
import { IoCameraSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";

const data = [
  {
    card: "travel_1",
    id: 1,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },

  {
    card: "travel_2",
    id: 2,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },

  {
    card: "travel_3",
    id: 3,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },

  {
    card: "travel_4",
    id: 4,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },
  {
    card: "travel_5",
    id: 5,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },
  {
    card: "travel_6",
    id: 6,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    suivre: "Suivre",
    commentaire: "Commentaires",
  },
];

function Cards() {
  return (
    <section id="travels">
      <div className="container_travel-cards">
        {data.map(
          ({
            card,
            id,
            spot,
            image,
            title,
            photo,
            profil,
            suivre,
            commentaire,
          }) => {
            return (
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
                  <h3>{commentaire}</h3>
                  <div className="profil-logo">  
                  < IoCameraSharp />
                  < IoHeartSharp />
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Cards;
