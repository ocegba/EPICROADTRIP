import React,  {useState} from 'react'
import {GoogleMap} from '@react-google-maps/api';

const containerStyle = {
  width: '1080px',
  height: '920px'
};

const initialCoordinates = {
  lat: -3.745,
  lng: -38.523
};

function GMap(){
    const [mapCenter, setMapCenter] = useState(initialCoordinates);
    const [mapZoom, setMapZoom] = useState(16);
    return(

        <GoogleMap
        mapContainerStyle ={containerStyle}
        center = {mapCenter}
        zoom = {mapZoom}
        >
        </GoogleMap>
    )
}

export default GMap;