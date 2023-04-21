import React from "react";
import "./profilModal.css";

import profil from '../../../assets/profil.png';
import Button from "../../button/Button";

const ProfilModal = ({ show }) => {
  if (!show) return null;
  return (
    <div className="modal-profil-container">
      <div className="modal-title-profil">
        <img className="img-modal-profil" src={profil} alt="profil" />
        <h2 className="title-profil">Name</h2>
      </div>
      <div className="modal-data-title-profil">
        <p>Publications</p>
        <p>Followers</p>
      </div>
      <div className="modal-data-profil">
        <p>86</p>
        <p>25</p>
      </div>
      <div className="modal-profil-button">
        <Button className="dark" size='small' children="Suivre" />
      </div>
    </div>
  );
};

export default ProfilModal;
