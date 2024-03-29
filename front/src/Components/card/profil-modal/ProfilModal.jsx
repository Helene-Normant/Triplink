import React from "react";
import "./profilModal.css";
import Button from "../../button/Button";

const ProfilModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-profil-container" onClick={onClose}>
      <div className="modal-title-profil">
        <img className="img-modal-profil" src={"https://source.unsplash.com/random/900%C3%97700/?selfie"} alt="profil" />
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
