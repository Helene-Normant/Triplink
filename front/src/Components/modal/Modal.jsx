import "./modal.css";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "../input/Input";

const Modal = ({ open, onClose }) => {
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
            <Input type="text" placeholder="Adresse email" size="large"/>
          </div>
          <div className='login'>
            <Input type="text" placeholder="Mot de passe" size="large"/>
          </div>
        </form>   
        <p className="lien-modal1">mot de passe oublié</p>
      </div>
      <div className="modal-btn">
        <h3 className="btn-light">Se connecter</h3>
        <p className="lien-modal2">Pas encore de compte ?</p>
      <Link to='/inscription'><p className="lien-modal3">Créer un compte en cliquant ici </p></Link>
      </div>
    </div>
    </div>
  );
};

export default Modal;
