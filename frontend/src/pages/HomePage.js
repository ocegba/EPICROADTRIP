import React, { useState } from "react";
import peacevalleyImg from "../media/PeaceValley.jpg";
import airplaneImg from "../media/Airplane.png";
import GMap from "../components/GMap"
import {Autocomplete} from '@react-google-maps/api';



function affichMap(location) {
  const map = GMap(document.getElementById('map'));
  map.setCenter()
  return (
    <div title="srchMap">
      <button>burger</button>
      <GMap id="map" />
    </div>  
  );
}

function HomePage() {
  const [mpOpen, mpIsOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const handlePlaceSelect= (place) =>{console.log(place)};
  return (
    <div>
      {!mpOpen ? <div title="srchPlc">
        <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
        <h1>Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez ceux des autres !</h1>
        {/* <input type="search" placeholder="Où voulez-vous aller ?"></input> */}
        <Autocomplete onLoad = {(autocomplete) => setAutocomplete(autocomplete)}
        onPlaceChanged ={() => handlePlaceSelect(autocomplete.getPlace())}>
            <input id ="txtqry" type="text" placeholder="Où voulez-vous aller ?"/>
            </Autocomplete>
        <button onClick={() => {
          mpIsOpen(true);
        }}>Valider</button>
      </div> : affichMap(document.getElementById('txtqry').value)}
      <div>
        <img src={airplaneImg} title="trvlIcon" />
        <h3>Voyage</h3>
      </div>
    </div>
  );
}

export default HomePage;


