import logo from '../assets/LOGO_min.png';
import React, { useState } from "react";
import apiService from '../apiService';

function Header() {
  //Test inscription
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  console.log(userName, email, password)

 const postNewUser = async (event) => {
  event.preventDefault();
  try {
    await apiService.Users.post({email: email, userName: userName, plainPassword: password})
  } catch (err) {
    console.error(err);
    alert(`Une erreur est survenue. \n${err}`)
}
 }

  return (
  <div className="btn-dark">
  <h3>S'inscrire</h3>
  <img src={logo} alt={'Logo Triplink'}/>
  {/* Test inscrption */}
  <div>
  <form onSubmit={postNewUser}>
    <label>
    username:
    <input onChange={(e) => {setUserName(e.target.value)}} type="text" name="username" required/>
    </label>
    <label>
    email :
    <input onChange={(e) => {setEmail(e.target.value)}} type="text" name="name" required/>
    </label>
    <label>
    password :
    <input onChange={(e) => {setPassword(e.target.value)}} type="text" name="name" required />
    </label>
  <input type="submit" value="Envoyer" />
  </form>

  </div>
  </div>
  )};


export default Header;