import "./modalProfil.css";
import profil from '../../../assets/profil.png';

const ModalProfil = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-profil-container"  onClick={onClose} >
      {/* <div 
      onClick={onClose} className="close-modal-profil">
        <p className="close-btn-profil">
          {" "}
          <IoCloseCircleOutline />{" "}
        </p>
      </div> */}
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
    </div>
  );
};

export default ModalProfil;
