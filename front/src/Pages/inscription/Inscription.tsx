import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/input/Input";
import "./inscription.css";
import logo from "../../assets/Triplink_min.png";
import Button from '../../Components/button/Button';

const Inscription = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  const handleClick2 = () => {
    navigate('/inscription');
  }

  return (
    <section className='container-inscription' data-testid="inscription-page">
      <div className='container-top'>
        <Link to='/'><h1 className="main-title-inscription">Triplink</h1></Link>
        <p className='welcome'>Bienvenue !</p>
        <p className='join-us'>Rejoins la communauté des voyageurs</p>
        <form className="form">
          <div className='first-line'>
            <Input className="input input--small" type="text" placeholder="Prénom" size="small" />
            <Input className="input input--small" type="text" placeholder="Nom" size="small" />
          </div>
          <div className='second-line'>
            <Input className="input input--small" type="text" placeholder="Pseudo" size="small" />
            <Input className="input input--small" type="date" placeholder="26/12/2022" size="small" />
          </div>
          <div>
            <Input className="input input--large" type="text" placeholder="Adresse email" size="large" />
          </div>
          <div>
            <Input className="input input--large" type="text" placeholder="Mot de passe" size="large" />
          </div>
          <div>
            <Input className="input input--large" type="text" placeholder="Confirmation de mot de passe" size="large" />
          </div>
        </form>
        <div className='conditions-container'>
          <input type="checkbox" />
          <h3 className="conditions">J’ai lu et j’accepte les conditions générales d’utilisation</h3>
        </div>
      </div>
      <div className='container-bottom'>
        <div className="buttons">
          <Button onClick={handleClick} className="light" children="Annuler" role="annule" />
          <hr className="line-buttons" />
          <Button onClick={handleClick2} className="dark" children="S'inscrire" role="inscrit" />
        </div>
        <Link to='/'><img className="logo-triplink-inscription" src={logo} alt={"Logo Triplink"} /></Link>
      </div>
    </section>
  )
}

export default Inscription;
