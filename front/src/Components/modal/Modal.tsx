import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./modal.css";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Input from "../input/Input";
import Button from '../../Components/button/Button';
import apiService from "../../apiService";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const initialUser = { password: "", email: "" };

const Modal = ({ open, onClose }: ModalProps) => {
  const [userLogin, setUserLogin] = useState(initialUser);
  const userContext = useContext(UserContext);

  if (!userContext) {
    return null;
  }
  const { saveUser } = userContext;

  const handleChange = ({ target }: any) => {
    const { name, value } = target
    setUserLogin((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (event:any) => {
    event.preventDefault();
    try {
      if(userLogin.email && userLogin.password) {
        const loginData = await apiService.Login.post({"email": userLogin.email, "password": userLogin.password }); 
        if (loginData.hasOwnProperty("token") && loginData.token) { 
          localStorage.setItem("apiToken", loginData.token);
        }
        if (loginData.hasOwnProperty("userID") && loginData.userID) {
          localStorage.setItem("userID", loginData.userID);
        }
        const name = await apiService.User.get(loginData.userID);
        // console.log(name);
          if (name?.username) { 
            saveUser({
              id: loginData.userID, // Assurez-vous de récupérer l'ID de l'utilisateur correctement
              username: name.username,
              token: loginData.token, // Assurez-vous de récupérer le jeton correctement
            });
            onClose()
            toast.success("Prêt.e pour le voyage "  + name.username + "?", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: "🏝️",
            });
        }
      }
    } catch(error:any) {
      toast.error("Oups il y a une erreur", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_RIGHT,
        icon: "☹️",
      });
    }
  };

  if (!open) return null;
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
              <Input className='input input--large' onChange={handleChange} type="text" value={userLogin.email} name="email" placeholder="Adresse email" size="large" required />
            </div>
            <div className='login'>
              <Input className='input input--large' onChange={handleChange} type="password" value={userLogin.password} name="password" placeholder="Mot de passe" size="large" required/>
            </div>
          <h3 className="lien-modal1">mot de passe oublié</h3>
        </div>
        <div className="modal-btn">
          <Button className="light" children="Se connecter" type='submit' role="login" />
          <h3 className="lien-modal2"> Pas encore de compte ? </h3>
          <Link to='/inscription'><h3 className="lien-modal3">Créer un compte en cliquant ici </h3></Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
