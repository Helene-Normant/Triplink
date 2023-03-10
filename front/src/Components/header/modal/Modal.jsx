import "./modal.css";
import { IoCloseCircleOutline } from "react-icons/io5";

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
        <form className="input-modal1">
            <input className="email-input" type="text" placeholder="Adresse email" />
         </form>   
         <form className="input-modal2">
         <input className="mot-input" type="text" placeholder="Mot de passe" />
         </form>
         <p className="lien-modal1">mot de passe oublié</p>
      </div>
      <div className="modal-btn">
        <h3 className="btn-light">Se connecter</h3>
        <p className="lien-modal2">Pas encore de compte ? </p>
        <p className="lien-modal3">Créer un compte en cliquant ici </p>
      </div>
    </div>
    </div>
  );
};

export default Modal;
