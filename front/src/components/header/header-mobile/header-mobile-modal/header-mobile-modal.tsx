import React, { useState, useEffect } from "react";
import Button from "../../../button/button";
import { Link, useNavigate } from "react-router-dom";
import "./header-mobile-modal.css";
import Modal from "../../../login-modal/login-modal";
import logo from '../../../../assets/triplink_min.png'


type HeaderMobileModalProps = {
  open: boolean;
  onClose: () => void;
};

const HeaderMobileModal = ({ open, onClose }: HeaderMobileModalProps) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.classList.add('is-modal-open')
    } else {
      body.classList.remove('is-modal-open')
    }
  }, [open])

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/inscription');
  }

  if (!open) return null;

  return (
    <>
      <div className="header-mobile-modal">
        <div onClick={onClose} className="close"></div>
        <div className="container-logo-title">
          <Link to="/">
            <img className="logo-triplink-modal" src={logo} alt={"Logo Triplink"} />
          </Link>
          <h1 className="title-triplink-modal">Triplink</h1>
        </div>
        <div className="buttons-modal">
          <Button
            className="light"
            onClick={() => setOpenModal(true)}
            children="Se connecter"
            type='button'
            role="login"
          />
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
          <div className="line-modal">
            <hr className="line" />
          </div>
          <Button onClick={handleClick} className="dark" children="S'inscrire" role="inscription" type="button" />
        </div>
      </div>
    </>
  );
};

export default HeaderMobileModal;




