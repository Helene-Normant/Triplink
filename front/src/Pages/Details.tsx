import React from "react";
import Header from '../Components/header/Header';
import TravelDetail from "../Components/details/TravelDetail";
import PhotoDetail from "../Components/details/PhotoDetail";
import './details.css'

const Details = () => {
  return (
    <>
      <Header/>
      <div className="card-details-container">
       <PhotoDetail/>
       <hr className="line-details"></hr>
       <TravelDetail/>
      </div>
      </>
  )
}

export default Details;
