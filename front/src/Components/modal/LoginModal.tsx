import React from "react";
import "./loginModal.css";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "../input/Input";
import Button from '../button/Button';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const handleClick = () => { }

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <div onClick={onClose} className="close-modal">
          <p className="close-btn">
            {" "}
            <IoCloseCircleOutline />{" "}
          </p>
        </div>
        <div className="modal-form">
          <h2>Bienvenue sur Triplink</h2>
          <h3 className="subtitle-modal">J'ai un compte</h3>
          <form className="form1">
            <div className='login'>
              <Input className='input input--large' type="text" placeholder="Adresse email" size="large" />
            </div>
            <div className='login'>
              <Input className='input input--large' type="password" placeholder="Mot de passe" size="large" />
            </div>
          </form>
          <h3 className="lien-modal1">mot de passe oublié</h3>
        </div>
        <div className="modal-btn">
          <Button onClick={handleClick} className="light" children="Se connecter" role="login" />
          <h3 className="lien-modal2"> Pas encore de compte ? </h3>
          <Link to='/inscription'><h3 className="lien-modal3">Créer un compte en cliquant ici </h3></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
