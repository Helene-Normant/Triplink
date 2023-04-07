import React from 'react';
import { Link } from "react-router-dom";
import Input from "../../Components/input/Input";
import "./inscription.css";
import logo from "../../assets/Triplink_min.png";
import Button from '../../Components/button/Button';

function Inscription() {
  return (
    <section className='container-inscription'>
      <div className='container-top'>
        <Link to='/'><h1 className="main-title">Triplink</h1></Link>
        <p className='welcome'>Bienvenue !</p>
        <p className='join-us'>Rejoins la communauté des voyageurs</p>
        <form className="form">
          <div className='first-line'>
            <Input type="text" placeholder="Prénom" size="small" />
            <Input type="text" placeholder="Nom" size="small" />
          </div>
          <div className='second-line'>
            <Input type="text" placeholder="Pseudo" size="small" />
            <Input type="text" placeholder="26/12/2022" size="small" />
          </div>
          <div>
            <Input type="text" placeholder="Adresse email" size="large" />
          </div>
          <div>
            <Input type="text" placeholder="Mot de passe" size="large" />
          </div>
          <div>
            <Input type="text" placeholder="Confirmation de mot de passe" size="large" />
          </div>
        </form> 
        <div className='conditions-container'>
          <input type="checkbox" />
          <p className="conditions">J’ai lu et j’accepte les conditions générales d’utilisation</p>
        </div>
      </div>
      <div className='container-bottom'>
        <div className="buttons">
          <Link to='/'>
            <Button className="light" children="Annuler" />
          </Link>
          <hr className="line-buttons" />
          <Link to='/inscription'>
            <Button className="dark" children="S'inscrire" />
          </Link> 
        </div>
        <Link to='/'><img className="logo-triplink" src={logo} alt={"Logo Triplink"} /></Link>
      </div>

    </section>
  )
}

export default Inscription;
