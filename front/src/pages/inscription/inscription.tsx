import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import "./inscription.css";
import logo from "../../assets/triplink_min.png";
import Button from '../../components/button/button';
import apiService from "../../api-service.js";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useIsMobile from "../../hooks/use-is-mobile";

const initialUser = { userName: "", userSurname: "", userPseudo: "", userBirth: "", email: "", password: "", userConfirm: "" };
const Inscription = () => {
  const [user, setUser] = useState(initialUser);
  const isMobile = useIsMobile();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const signUp = async (event: any) => {
    event.preventDefault();

  const birthDate = new Date(user.userBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  if (age < 18) {
    toast.error("Vous devez avoir au moins 18 ans pour t'inscrire", {
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_LEFT,
      icon: "😓",
    });
    return;
  }


    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(user.password)) {
    toast.error("Le mot de passe doit contenir au moins 8 caractères avec une combinaison de chiffres et de lettres", {
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_LEFT,
      icon: "😓",
    });
    return;
  }

    if (user.password !== user.userConfirm) {
      toast.error("Oups, les mots de passe ne sont pas identiques", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_LEFT,
        icon: "😓",
      });
    };

    try {
      if (user.userName && user.userSurname && user.userPseudo && user.userBirth && user.email && user.password) {
        if (user.password === user.userConfirm) {
          const registerData = await apiService.User.post({
            firstName: user.userName,
            lastName: user.userSurname,
            username: user.userPseudo,
            birthday: user.userBirth,
            email: user.email,
            plainPassword: user.password
          });

          if (registerData.ok === false) {
            console.log('ERROR', Error);
            toast.error("Oups une erreur s'est produite", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_LEFT,
              icon: "😥",
            });
          } else {
            toast.success("Bienvenue sur Triplink !", {
              hideProgressBar: true,
              position: toast.POSITION.BOTTOM_RIGHT,
              icon: "🏝️",
            });
            setUser(initialUser);
            navigate('/');
          }
        }
      }
    } catch (Error) {
      console.log('ERROR', Error);
      toast.error("Oups une erreur s'est produite", {
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
  };

  return (
    <section className='container-inscription' data-testid="inscription-page">
      <div className='container-top'>
        <Link to='/'><h1 className="main-title-inscription">Triplink</h1></Link>
        <p className='welcome'>Bienvenue !</p>
        <p className='join-us'>Rejoins la communauté des voyageurs</p>
        <form className="form" onSubmit={signUp}>
          <div className='first-line'>
            <Input onChange={handleUserChange} value={user.userName} name="userName" className="input input--small" type="text" placeholder="Prénom" size="small" required />
            <Input onChange={handleUserChange} value={user.userSurname} name="userSurname" className="input input--small" type="text" placeholder="Nom" size="small" required />
          </div>
          <div className='second-line'>
            <Input onChange={handleUserChange} value={user.userPseudo} name="userPseudo" className="input input--small" type="text" placeholder="Pseudo" size="small" required />
            <Input onChange={handleUserChange} value={user.userBirth} name="userBirth" className="input input--small" type="date" placeholder="26/12/2022" size="small" required />
          </div>
          <div>
            <Input onChange={handleUserChange} value={user.email} name="email" className={`input ${isMobile ? 'input--small' : 'input--large'}`} type="text" placeholder="Adresse email" size="small" required />
          </div>
          <div>
            <Input onChange={handleUserChange} value={user.password} name="password" className={`input ${isMobile ? 'input--small' : 'input--large'}`} type="password" placeholder="Mot de passe" size="small" required />
          </div>
          <div>
            <Input onChange={handleUserChange} value={user.userConfirm} name="userConfirm" className={`input ${isMobile ? 'input--small' : 'input--large'}`} type="password" placeholder="Confirmation de mot de passe" size="small" required />
          </div>
          <div className='conditions-container'>
            <input className='check-inscription' type="checkbox" required />
            <h3 className="conditions">J’ai lu et j’accepte les conditions générales d’utilisation</h3>
          </div>
          <div className='container-bottom'>
            <div className="buttons-inscription">
              <Button onClick={handleClick} className="light" children="Annuler" role="annule" type="button" />
              <hr className="line-buttons-inscription" />
              <Button className="dark" children="S'inscrire" role="inscrit" type="submit" />
            </div>
            <Link to='/'><img className="logo-triplink-inscription" src={logo} alt={"Logo Triplink"} /></Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Inscription;
