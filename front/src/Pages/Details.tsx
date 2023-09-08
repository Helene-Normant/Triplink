import React from "react";
import HeaderDesktop from '../Components/header/header-desktop/HeaderDesktop';
import TravelDetail from "../Components/details/TravelDetail";
import PhotoDetail from "../Components/details/PhotoDetail";
import './details.css'

const Details = () => {
  return (
    <>
      <HeaderDesktop/>
      <div className="card-details-container">
       <PhotoDetail/>
       <hr className="line-details"></hr>
       <TravelDetail/>
      </div>
      </>
  )
}

export default Details;
