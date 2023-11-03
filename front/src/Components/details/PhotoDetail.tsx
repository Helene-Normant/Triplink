import React, { useState, useEffect } from "react";
import apiService from "../../apiService.js";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import './travelPhoto.css';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { Country } from '../cards/Cards';


type User = {
  picture: string,
  username: string,
};

type Publication = {
  createdAt: string,
  description: string;
  bagTips: string;
  id: string;
  traveler: User;
  budget: number;
  picture: string;
  country: Country;
}

const PhotoDetail = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Publication | null>();
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage === 2 ? 0 : currentImage + 1);
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? 2 : currentImage - 1);
  }

  const publicationApi = async () => {
    try {
      setLoading(true);
      const photosData = await apiService.Publications.get(id);
      setPhotos(photosData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    publicationApi();
  },
    // eslint-disable-next-line
    []);

  if (!photos) {
    return null;
  }

  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <div className="travel-photo-container" data-testid="photo-details">
      <h3 className="travel-country">
        {photos.country?.nameFr} < IoLocationSharp />
      </h3>
      <div className="travel-photo">
        <button className="next-button" onClick={prevImage} aria-label="Previous"><FaCircleArrowLeft name="Previous" /></button>
        <img className="travel-photos" src={photos.picture?.split(',')[currentImage]} alt="photos voyage" />
        <button className="next-button" onClick={nextImage} aria-label="Next"><FaCircleArrowRight name="Next" /></button>
      </div>
    </div>
  )
}

export default PhotoDetail;