import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../button/button";
import logo from "../../../../assets/triplink_min.png";
import LoginModal from "../../../login-modal/login-modal";

const HeaderLogin = () => {
  const [openModal, setOpenModal] = useState(false);

  openModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/inscription');
  }

  return (
    <div className="container-header" data-testid="header-login">
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
          type="button"
        />
        <LoginModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        <hr className="line-buttons" />
        <Button onClick={handleClick} className="dark" children="S'inscrire" role="inscription" type="button" />
      </div>
    </div >
  )
}

export default HeaderLogin;