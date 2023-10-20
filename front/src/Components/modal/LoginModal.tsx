import React, { useState } from "react";
import "./login-modal.css";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "../input/Input";
import Button from '../button/Button';
import apiService from "../../apiService";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useIsMobile from "../../Hooks/useIsMobile";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialUser = { password: "", email: "" };

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  const handleClick = () => {
  }

  const [user, setUser] = useState(initialUser);
  const isMobile = useIsMobile();

  const handleChange = ({ target }: any) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      if (user.email && user.password) {
        const loginData = await apiService.Login.post({ "email": user.email, "password": user.password });
        if (loginData.hasOwnProperty("token") && loginData.token) {
          localStorage.setItem("apiToken", loginData.token);
        }
        if (loginData.hasOwnProperty("userID") && loginData.userID) {
          localStorage.setItem("userID", loginData.userID);
        }
        const name = await apiService.User.get(loginData.userID);
        if (name.username) {
          onClose()
          toast.success("Prêt.e pour le voyage " + name.username + "?", {
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            icon: "🏝️",
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        console.log(loginData.userID)
      }
    } catch (error: any) {
      toast.error("Oups il y a une erreur", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: "☹️",
      });
    }
  };

  if (!isOpen) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <div onClick={onClose} className="close-modal">
          <p className="close-btn">
            {" "}
            <IoCloseCircleOutline />{" "}
          </p>
        </div>
        <form className="form1" onSubmit={handleLogin}>
          <div className="modal-form">
            <h2>Bienvenue sur Triplink</h2>
            <h3 className="subtitle-modal">J'ai un compte</h3>
            <div className='login'>
              <Input  className={`input ${isMobile ? 'input--medium' : 'input--large'}`} onChange={handleChange} type="text" value={user.email} name="email" placeholder="Adresse email" size="medium" required />
            </div>
            <div className='login'>
              <Input  className={`input ${isMobile ? 'input--medium' : 'input--large'}`} onChange={handleChange} type="password" value={user.password} name="password" placeholder="Mot de passe" size="medium" required />
            </div>
            <h3 className="lien-modal1">mot de passe oublié</h3>
          </div>
          <div className="modal-btn">
            <Button onClick={handleClick} className="light" children="Se connecter" type='submit' role="login" />
            <h3 className="lien-modal2"> Pas encore de compte ? </h3>
            <Link to='/inscription'><h3 className="lien-modal3">Créer un compte en cliquant ici </h3></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
