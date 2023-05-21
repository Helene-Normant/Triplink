import React from "react";
import "./cards.css";
import IMG1 from "../../assets/card.png";
import profil from "../../assets/profil.png";
import Card from "../card/Card";

const card = [
  {
    card: "travel_1",
    id: 1,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },

  {
    card: "travel_2",
    id: 2,
    spot: "Ibiza",
    image: IMG1,
    title: "Mon voyage à Ibiza",
    photo: profil,
    profil: "Lina007",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },

  {
    card: "travel_3",
    id: 3,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },

  {
    card: "travel_4",
    id: 4,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_5",
    id: 5,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_6",
    id: 6,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },

  {
    card: "travel_7",
    id: 7,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_8",
    id: 8,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_9",
    id: 9,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_10",
    id: 10,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_11",
    id: 11,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
  {
    card: "travel_12",
    id: 12,
    spot: "Tahiti",
    image: IMG1,
    title: "Mon voyage à Tahiti",
    photo: profil,
    profil: "Maya005",
    // suivre: "Suivre",
    // commentaire: "Commentaires",
  },
];

const Cards = () => {
  return (
    <section id="travels">
      <div className="container_travel-cards">
        {card.map(({ card, id, spot, image, title, photo, profil }) => {
          return (
            <Card
              card={card}
              id={id}
              spot={spot}
              image={image}
              title={title}
              photo={photo}
              profil={profil}
            />
          );
        })};
      </div>
    </section>
  );
};

export default Cards;
