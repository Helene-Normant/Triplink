import logo from "../../assets/Triplink_min.png";
import "./header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./modal/Modal";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  // const navigate = useNavigate();
  openModal?document.body.style.overflow = "hidden": document.body.style.overflow = "auto";

  // const handleClick = () => {
  //   console.log('Coucou');
  //   navigate('/inscription');
  // }
  
  return (
    <div className="container-header">
      <div className="logo-header">
        {/* srcset avec 3 tailles d'image pour responsive */}
      <Link to='/'><img className="logo-triplink" src={logo} alt={"Logo Triplink"} /></Link>
      </div>
      <div className="header-title">
      <Link to='/'><h1 className="main-title">Triplink</h1></Link>
      </div>
      {/* <button onClick={handleClick}>Go to inscription</button> */}
      <div className="header-buttons">
        <h3 className="btn-light open-modal" onClick={() => setOpenModal(true)}>
          Se connecter
        </h3>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <hr className="line-buttons" />
      <Link to='/inscription'><h3 className="btn-dark">S'inscrire</h3></Link> 
      </div>
    </div>
  );
}

export default Header;
