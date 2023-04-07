import logo from "../../assets/Triplink_min.png";
import "./header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../buttons/Buttons";


function Header() {
  return (
    <div className="container-header">
      <div className="logo-header">
        {/* srcset avec 3 tailles d'image pour responsive */}
        <Link to="/">
          <img className="logo-triplink" src={logo} alt={"Logo Triplink"} />
        </Link>
      </div>
      <div className="header-title">
        <Link to="/">
          <h1 className="main-title">Triplink</h1>
        </Link>
      </div>
      {/* <button onClick={handleClick}>Go to inscription</button> */}
      <Buttons/>
    </div>
  );
}

export default Header;
