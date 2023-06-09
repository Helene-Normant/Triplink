import React, { useState } from "react";
import Button from "../../../button/Button";
import { useNavigate } from "react-router-dom";
// import Modal from "../../../modal/Modal";
import "./headerMobileModal.css";


type HeaderMobileModalProps = {
  open: boolean;
  onClose: () => void;
};

const HeaderMobileModal = ({ open, onClose }: HeaderMobileModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  openModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/inscription');
  }

  if (!open) return null;
  return (
    <div className="header-mobile-modal">
      <div className="buttons-modal">
        <Button
          className="light"
          onClick={() => setOpenModal(true)}
          children="Se connecter"
        />
        {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
        <hr className="line" />
        <Button onClick={handleClick} className="dark" children="S'inscrire" />
      </div>
    </div>
  );
};

export default HeaderMobileModal;




