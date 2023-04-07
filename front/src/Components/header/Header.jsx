import "./header.css";
import logo from "../../assets/Triplink_min.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Modal from "../modal/Modal";


function Header() {
  const [openModal, setOpenModal] = useState(false);
  openModal?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";

  return (
    <div className="container-header">
      <div className="logo-header">
        <Link to="/">
          <img className="logo-triplink" src={logo} alt={"Logo Triplink"} />
        </Link>
      </div>
        <Link to="/">
          <h1 className="main-title">Triplink</h1>
        </Link>
      <div className="buttons">
      <Button
        className="light"
        onClick= {() => setOpenModal(true)}
        children="Se connecter"
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <hr className="line-buttons" />
      <Link to="/inscription">
        <Button className="dark" children="S'incrire" />
      </Link>
    </div>
    </div>
  );
}

export default Header;
