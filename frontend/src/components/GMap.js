import React, { useState, useEffect } from "react";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "1080px",
  height: "920px",
};

const initialCoordinates = {
  lat: -3.745,
  lng: -38.523,
};



function GMap({ location, onGMValue }) {
  const [mapCenter, setMapCenter] = useState(initialCoordinates);
  const [mapZoom, setMapZoom] = useState(16);
  const [coordinates, setCoordinates] = useState({});
  const [mapStyles, setMapStyles] = useState([]);

  function clickOnMap(e) {
    const cLat = e.latLng.lat();
    const cLng = e.latLng.lng();
    setCoordinates({
      lat: cLat,
      lng: cLng,
    });
    onGMValue(coordinates);
  };
  useEffect(() => {
    if (location) {
      setMapCenter({
        lat: location.geometry.location.lat(),
        lng: location.geometry.location.lng(),
      });
      setMapZoom(10)};
      setMapStyles([      {        
        featureType: "poi",        
        stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          stylers: [{ visibility: "off" }],
        }
      ]);
    }
  , [location]);
  

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={mapZoom}
      onClick={(e) => clickOnMap(e)}
      options ={{styles:mapStyles}}
    ></GoogleMap>
  );
}

export default GMap;