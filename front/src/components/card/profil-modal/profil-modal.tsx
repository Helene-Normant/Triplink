import React from "react";
import "./profil-modal.css";

import Button from "../../button/button";

type ProfilModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const ProfilModal = ({ isOpen, onClose }: ProfilModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="modal-profil-container" onClick={onClose} data-testid="modal-profil-container">
      <div className="modal-title-profil" data-testid="modal-title-profil">
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
        <Button className="dark-small" children="Suivre" role="button" type="button"/> 
      </div>
    </div>
  );
};

export default ProfilModal;
