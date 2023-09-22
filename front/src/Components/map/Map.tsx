import React, {useState, useEffect} from 'react';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoHome } from "react-icons/io5";
import apiService from "../../apiService";

type TravelStep = {
  id: number;
  title: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  plus: string;
  less: string;
};

type User = {
  id: number;
  username: string;
  picture: string;
};

type Publication = {
  id: number;
  title: string;
  description: string;
  country: string;
  budget: number | null;
  bagTips: string | null;
  travelType: string;
  picture: string;
  travelPartner: string | null;
  createdAt: string;
  modifiedAt: string | null;
  traveler: User;
  userWhoLiked: User[];
  stepTravel: TravelStep[];
};


const MapComponent = () => {
  const [pingPublication, setPingPublication] = useState<Publication | null>(null);

  const handlePublication = async () => {
  const publication = await apiService.Publications.get(1); 
  setPingPublication(publication)
  }

  useEffect(() => {
    handlePublication();
  }, []);

  if (!pingPublication) {
    return null; 
  }

  const [firstStepLatitude, firstStepLongitude] = [
    pingPublication.stepTravel[0].latitude,
    pingPublication.stepTravel[0].longitude,
  ];

  return (
    <MapContainer className="map" center={[firstStepLatitude, firstStepLongitude]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pingPublication && pingPublication.stepTravel.map((step, index) => (
        <Marker key={index} position={[step.latitude, step.longitude]}>
          <Popup className='popup'>
            <div className='container-popup'>
              <h1>{step.title}</h1>
              <p>{step.description}</p>
              <span className='plus'>
                <h2 className="titlePlus">Les <b>+ :</b></h2>
                <p className="textPlus">{step.plus}</p>
              </span>
              <span className='less'>
                <h2 className="titleLess">Les <b>-  :</b></h2>
                <p className="textLess">{step.less}</p>
              </span>
              <span className='address'>
                <IoHome className='svgAddress'/>
                <p className="textAddress">{step.address}</p>
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
