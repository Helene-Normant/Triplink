import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./profil.css";
import logo from "../../assets/Triplink_min.png";
import placeholder from "../../assets/profil-picture.png";
import Button from '../../Components/button/Button';
import Input from "../../Components/input/Input";

const Profil = () => {
    const [profilPicture, setProfilPicture] = useState(placeholder);
    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
      hiddenFileInput.current.click();
    };
    
    function handleChange(e : any) {
        console.log(e.target.profilPicture);
        setProfilPicture(URL.createObjectURL(e.target.files[0]));
    }

    return (
    <div className='container-profil'>
         <Link to='/'><h1 className="main-title-profil">Triplink</h1></Link>
            <form>
            <div className='container-picture'>
            <div className='profil-picture'>
              <img className='picture'src={profilPicture} />
           </div>
           <div className='profil-picture-button'>
             <Button className='light-small' onClick={handleClick} role="picture" type="submit">
              Modifier
             </Button>
             <input type="file" onChange={handleChange}
             style={{display:'none'}} ref={hiddenFileInput} />
             </div>
         </div>
         <div className='profil-bio-input'>
         <textarea className='input input--xlarge textarea' onChange={''}  type="text" placeholder="Bio" size="xlarge" maxlength="100" resize= "none" />
         </div>
         <div className='profil-info-input'>
         <Input className="input input--small" onChange={''}  type="text" placeholder="Ville" size="small" />
         <input type="checkbox" />
            <h3 className="condition-age"> Afficher mon âge</h3>
            </div>
         <div className='profil-travel-select'>
            <select className="input input--small select" onChange={''}>
             <option value="select">Pays visités</option>
             <option value="Portugal">Portugal</option>
             <option value="Espagne">Epagne</option>
             <option value="France">France</option>
             <option value="Grèce">Grèce</option>
             <option value="Angleterre">Angleterre</option>
             <option value="Allemagne">Allemagne</option>
            </select>
            <select className="input input--small select" onChange={''}>
             <option value="select">Pays souhaités</option>
             <option value="Portugal">Portugal</option>
             <option value="Espagne">Epagne</option>
             <option value="France">France</option>
             <option value="Grèce">Grèce</option>
             <option value="Angleterre">Angleterre</option>
             <option value="Allemagne">Allemagne</option>
            </select>
        </div>
        <div className='profil-tavel-style-select'>
            <select className="input input--large select" onChange={''}>
             <option value="select"> Style de voyages</option>
             <option value="Portugal"> Road trip</option>
             <option value="Espagne">Nature</option>
             <option value="France">Aventure</option>
             <option value="Grèce">Culturel</option>
             <option value="Angleterre">Détente</option>
             <option value="Allemagne">Culinaire</option>
             <option value="Allemagne">Humanitaire</option>
             <option value="Allemagne">Affaire</option>
            </select>
        </div>
        <div className='container-bottom-profil'>
            <div className="buttons-profil-info">
              <Link to='/'> Passer cette étape</Link>
              <hr className="line-buttons" />
              <Button className="dark" children="Confirmer" role="confirmer" type="submit" />
            </div>
            <Link to='/'><img className="logo-triplink-profil" src={logo} alt={"Logo Triplink"} /></Link>
          </div>
         </form>
     </div>
    )
};

export default Profil;

