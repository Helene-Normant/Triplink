import logo from "../../assets/Triplink_min.png";
import "./header.css";
import { useState } from "react";
import Modal from "./modal/Modal";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  
  openModal?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";
  
  return (
    <div className="container-header">
      <div className="logo-header">
        <img className="logo-triplink" src={logo} alt={"Logo Triplink"} />
      </div>
      <div className="header-title">
        <h1 className="main-title">Triplink</h1>
      </div>
      <div className="header-buttons">
        <h3 className="btn-light open-modal" onClick={() => setOpenModal(true)}>
          Se connecter
        </h3>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <hr className="line-buttons" />
        <h3 className="btn-dark">S'inscrire</h3>
      </div>
    </div>
  );
}

export default Header;
