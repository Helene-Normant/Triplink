import React from "react";
import "./profil-modal.css";

import profil from '../../../assets/profil.png';
import Button from "../../button/button";

const ProfilModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-profil-container" onClick={onClose}>
      <div className="modal-title-profil">
        <img className="img-modal-profil" src={profil} alt="profil" />
        <h2 className="title-profil">Name</h2>
      </div>
      <div className="modal-data-title-profil">
        <h3>Publications</h3>
        <h3>Followers</h3>
      </div>
      <div className="modal-data-profil">
        <h3>86</h3>
        <h3>25</h3>
      </div>
      <div className="modal-profil-button">
        <Button className="dark-small" children="Suivre" role="follow" />
      </div>
    </div>
  );
};

export default ProfilModal;
