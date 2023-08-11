import React from "react";
import "./headerDesktop.css";
import logo from "../../../assets/Triplink_min.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import Modal from "../../modal/Modal";
import { useAuth } from "../../../AuthContext";

const HeaderDesktop = () => {
  const [openModal, setOpenModal] = useState(false);
  openModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const { isUserLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/inscription');
  }

  return (
    isUserLoggedIn ? (
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
          onClick={() => login()}
          children="Se déconnecter"
          role="login"
        />
      </div>
    </div >
    ) : 
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
        onClick={() => setOpenModal(true)}
        children="Se connecter"
        role="login"
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <hr className="line-buttons" />
      <Button onClick={handleClick} className="dark" children="S'inscrire" role="inscription" />
    </div>
  </div >
  );
}

export default HeaderDesktop;
