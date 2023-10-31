import React from "react";
import Header from '../../components/header/header';
import TravelDetail from "./travel-details";
import PhotoDetail from "./photo-details";
import Footer from "../../components/footer/footer";
import './details.css'
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import MapComponent from "../../components/map/map";

const Details = () => {
  return (
    <>
      <Header />
      <div className="card-details-return">
        <Link className="link-return" to="/">
          <div className="icon-return">
            <h1><BsArrowReturnLeft /></h1>
          </div>
          <div className="return-details">
            <h2>Retour</h2>
          </div>
        </Link>
      </div>
      <div className="card-details-container">
        <PhotoDetail />
        <hr className="line-details"></hr>
        <TravelDetail />
      </div>
      <MapComponent />
      <Footer />
    </>
  )
}

export default Details;
