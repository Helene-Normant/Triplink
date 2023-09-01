import React from "react";
import "./headerDesktop.css";
import logo from "../../../assets/Triplink_min.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import Modal from "../../modal/Modal";
import {useEffect} from 'react';

const HeaderDesktop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);

  openModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const navigate = useNavigate();

  const logout = () => {
   localStorage.clear()
   setCheckLocalStorage(false)
   setisUserLoggedIn(false)
   console.log(localStorage)
  }

  const handleClick = () => {
    navigate('/inscription');
  }

 useEffect(() => {
let token = localStorage.getItem('apiToken')
if (token) {
  setisUserLoggedIn(true)
  setCheckLocalStorage(true)
} 

 }, [checkLocalStorage])

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
          onClick={() => logout()}
          children="Se déconnecter"
          role="login"
          type="button"
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
        type="button"
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <hr className="line-buttons" />
      <Button onClick={handleClick} className="dark" children="S'inscrire" role="inscription" type="button" />
    </div>
  </div >
  );
}

export default HeaderDesktop;
