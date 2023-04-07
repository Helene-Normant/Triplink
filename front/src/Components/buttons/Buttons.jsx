import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./buttons.css";
import "../modal/Modal";
import Modal from "../modal/Modal";

const Buttons = () => {
  const [openModal, setOpenModal] = useState(false);
  openModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="buttons">
      <Button
        className="light"
        onClick= {() => setOpenModal(true)}
        children="Se connecter"
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <hr className="line-buttons" />
      <Link to="/inscription">
      <Button className="dark" children="S'incrire" />
      </Link>
    </div>
  );
};

export default Buttons;
