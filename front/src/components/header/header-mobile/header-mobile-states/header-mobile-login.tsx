import React from "react";
import "./header-mobile-login.css";
import logo from "../../../../assets/triplink_min.png";
import IconProfil from "../../../../assets/profil_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMobileModal from "../header-mobile-modal/header-mobile-modal";

const HeaderMobileLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-header-mobile">
      <div className="logo-profil">
        <img className="profil-icon" src={IconProfil} alt={"Profil Icon"} onClick={openModal} />
      </div>
      <HeaderMobileModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="logo-header-mobile">
        <Link to="/">
          <img className="logo-triplink-mobile" src={logo} alt={"Logo Triplink"} />
        </Link>
      </div>
      <Link to="/">
        <h1 className="main-title-modal">Triplink</h1>
      </Link>
    </div >
  );
};

export default HeaderMobileLogin;
