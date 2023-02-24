import logo from '../../assets/Triplink_min.png';
import './header.css';

function Header() {
  return (
  <div className='container-header'>
    <div className='logo-header'>
      <img className='logo-triplink' src={logo} alt={'Logo Triplink'}/>
      </div>
    <div className='header-title'>
      <h1 className='main-title'>Triplink</h1>
      </div>
    <div className='header-buttons'>
      <h3 className="btn-light">Se connecter</h3>
      <hr className="line-buttons"/>
      <h3 className="btn-dark">S'inscrire</h3></div>
  </div>
  )};


export default Header;