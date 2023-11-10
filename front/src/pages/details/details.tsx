import React from "react";
import Header from '../../components/header/header';
import TravelDetails from "./travel-details";
import PhotoDetails from "./photo-details";
import Footer from "../../components/footer/footer";
import './details.css'
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Map from "../../components/map/map";

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
        <PhotoDetails />
        <hr className="line-details"></hr>
        <TravelDetails />
      </div>
      <Map />
      <Footer />
    </>
  )
}

export default Details;
