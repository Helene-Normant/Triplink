import { Link } from "react-router-dom";
import Button from "../../../button/Button";
import logo from "../../../../assets/Triplink_min.png";


const HeaderLogout = ({ logout }) => {
  return (
    <div className="container-header">
    <div className="logo-header">
      <Link to="/">
        <img className="logo-triplink" src={logo} alt={"Logo Triplink"} />
      </Link>
    </div>
    <Link to="/">
      <h1 className="main-title">Triplink</h1>
    </Link>
    <div className="buttons">
      <Button
        className="light"
        onClick={() => logout()}
        children="Se déconnecter"
        role="login"
        type="button"
      />
    </div>
  </div >
  )
}

export default HeaderLogout;