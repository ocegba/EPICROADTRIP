import React, { useState } from "react";

import peacevalleyImg from "../media/PeaceValley.jpg";
import GMap from "../components/GMap";
import { Autocomplete } from "@react-google-maps/api";
import mapImg from "../media/Map.png";
import GMap from "../components/GMap";
import { Autocomplete } from "@react-google-maps/api";
import mapImg from "../media/Map.png";

import Icon from "@mui/material/Icon";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Icon from "@mui/material/Icon";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

function HomePage() {
  const [mpOpen, mpIsOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [valueLocation, setValueLocation] = useState("");
  const [GMcoordinates, setGMCoordinates] = useState(null);
  const handleGMValue = (coordinates) => {
    setGMCoordinates(coordinates);
  };

  return (
    <div>
      {!mpOpen ? (
        <div title="srchPlc">
          <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
          <h1>
            Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez
            ceux des autres !
          </h1>
          {/* <input type="search" placeholder="Où voulez-vous aller ?"></input> */}

          <Autocomplete
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={() => {
              setValueLocation(autocomplete.getPlace());
            }}
          >
            <input
              id="txtqry"
              type="text"
              placeholder="Où voulez-vous aller ?"
            />
          </Autocomplete>
          <button onClick={() => mpIsOpen(true)}>Valider</button>
        </div>
      ) : (
        <div title="srchMap">
          <button>burger</button>
          {/* <img src={mapImg} alt="Map"></img> */}
          <GMap location={valueLocation} onGMValue={handleGMValue} />
          <p>
            Coordinates:{" "}
            {GMcoordinates
              ? `${GMcoordinates.lat}, ${GMcoordinates.lng}`
              : "Unknown"}
          </p>
        </div>
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
