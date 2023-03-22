import React, { useState } from "react";

import peacevalleyImg from "../media/PeaceValley.jpg";
import airplaneImg from "../media/Airplane.png";
import mapImg from "../media/Map.png";

import Icon from "@mui/material/Icon";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

function affichMap() {
  return (
    <div title="srchMap">
      <button>burger</button>
      <img src={mapImg} alt="Map"></img>
    </div>
  );
}

function HomePage() {
  const [mpOpen, mpIsOpen] = useState(false);
  return (
    <div>
      {!mpOpen ? (
        <div title="srchPlc">
          <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
          <h1>
            Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez
            ceux des autres !
          </h1>
          <input type="search" placeholder="Où voulez-vous aller ?"></input>
          <button
            on
            onClick={() => {
              mpIsOpen(true);
            }}
          >
            Valider
          </button>
        </div>
      ) : (
        affichMap()
      )}
      <div>
        <div className="travel-entete">
          <Icon aria-label="travel">
            <FlightTakeoffIcon />
          </Icon>
          <h3>Voyage</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
