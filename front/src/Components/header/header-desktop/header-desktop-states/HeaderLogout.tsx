import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/Triplink_min.png";
import "./headerLogout.css";
import profil from "../../../../assets/profil.png";



const HeaderLogout = ({ logout }) => {
  

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-header">
    <div className="logo-header-menu">
      <Link to="/">
     <img className="logo-triplink" src={logo} alt={"Logo Triplink"} />
     </Link>
  </div>
  <Link to="/">
   <h1 className="main-title">Triplink</h1>
   </Link>
    <div className={`header-menu ${menuOpen ? 'open' : ''}`}>
    <div className="menu-icon" onClick={toggleMenu}>
      <img className="log-icon" src={profil} alt={"Profil Icon"} />
    </div>
    <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
      <li className="menu-cat top"> <h3>Mon compte</h3></li>
      <li className="menu-cat"><h3>Mes publications</h3></li>
      <li className="menu-cat-deco"> 
        <a
        className="logout-header"
        onClick={() => logout()}
        role="login"
      > 
      <h3>Se déconnecter</h3> 
      </a>
      </li>
    </ul>
  </div>
</div>
  );
 
}

export default HeaderLogout;