import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/triplink_min.png";
import "./header-mobile-logout.css";
import profil from "../../../../assets/profil.png";

type LogoutMobileProps = {
  logout: () => void;
};

const HeaderMobileLogout = ({ logout }: LogoutMobileProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-header-mobile">
      <div className="logo-header-mobile">
        <Link to="/">
          <img className="logo-triplink-mobile" src={logo} alt={"Logo Triplink"} />
        </Link>
      </div>
      <Link to="/">
        <h1 className="main-title-mobile">Triplink</h1>
      </Link>
      <div className={`profil-icon ${menuOpen ? 'open' : ''}`}>
        <div onClick={toggleMenu}>
          <img className="log-mobile-icon" src={profil} alt={"Profil Icon"} />
        </div>
        <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <li className="menu-cat top"> <h3>Mon compte</h3></li>
          <li className="menu-cat"><h3>Mes publications</h3></li>
          <li className="menu-cat-deco">
            <div
              className="logout-header"
              onClick={() => logout()}
              role="button"
            >
              <h3>Se déconnecter</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMobileLogout;
