import React from 'react';
// import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/input/Input";
import "./inscription.css";
import logo from "../../assets/Triplink_min.png";

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
          <div className='other-line'>
            <Input type="text" placeholder="Adresse email" size="large" />
          </div>
          <div className='other-line'>
            <Input type="text" placeholder="Mot de passe" size="large" />
          </div>
          <div className='other-line'>
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
          <Link to='/'><h3 className="btn-light">Annuler</h3></Link>
          <hr className="line-buttons" />
          <Link to='/inscription'><h3 className="btn-dark">S'inscrire</h3></Link> 
        </div>
        <Link to='/'><img className="logo-triplink" src={logo} alt={"Logo Triplink"} /></Link>
      </div>

    </section>
  )
}

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  // return (
  //   <div>
  //     <label>
  //       <input
  //         type="checkbox"
  //         checked={checked}
  //         onChange={handleChange}
  //       />
  //       My Value
  //     </label>

  //     <p>Is "My Value" checked? {checked.toString()}</p>
  //   </div>
  // );

export default Inscription;


//   return (
//     <div>
//       <Input type="text" placeholder="Petit input" size="small" className="my-custom-class" />
//       <Input type="text" placeholder="Grand input" size="large" />
//     </div>
//   );


    // <div className="overlay">
    // <div className="modal-container">
    //     <p className="close-btn">
    //       {" "}
    //       <IoCloseCircleOutline />{" "}
    //     </p>
    //   </div>
    //   <div className="modal-form">
    //     <h2>Bienvenue sur Triplink</h2>
    //     <h3 className="subtitle-modal">J'ai un compte</h3>
    //     <form className="input-modal1">
    //       <input className="email-input" type="text" placeholder="Adresse email" />
    //     </form>   
    //     <form className="input-modal2">
    //       <input className="mot-input" type="text" placeholder="Mot de passe" />
    //     </form>
    //     <p className="lien-modal1">mot de passe oublié</p>
    //   </div>
    //   <div className="modal-btn">
    //     <h3 className="btn-light">Se connecter</h3>
    //     <p className="lien-modal2">Pas encore de compte ? </p>
    //   <Link to='/inscription'><p className="lien-modal3">Créer un compte en cliquant ici </p></Link>
    //   </div>
    // </div> 
