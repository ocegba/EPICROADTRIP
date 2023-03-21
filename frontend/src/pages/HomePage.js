import React, { useState } from "react";
import peacevalleyImg from "../media/PeaceValley.jpg";
import airplaneImg from "../media/Airplane.png";
import GMap from "../components/GMap"



function affichMap() {
  return (
    <div title="srchMap">
      <button>burger</button>
      <GMap />
    </div>    
  );
}

function HomePage() {
  const [mpOpen, mpIsOpen] = useState(false);
  return (
    <div>
      {!mpOpen ? <div title="srchPlc">
        <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
        <h1>Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez ceux des autres !</h1>
        <input type="search" placeholder="Où voulez-vous aller ?"></input>
        <button on onClick={() => {
          mpIsOpen(true);
        }}>Valider</button>
      </div> : affichMap() }
      <div>
        <img src={airplaneImg} title="trvlIcon" />
        <h3>Voyage</h3>
      </div>
    </div>
  );
}

export default HomePage;


