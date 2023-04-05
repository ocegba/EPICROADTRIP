import React, { useState, useRef } from "react";
import peacevalleyImg from "../media/PeaceValley.jpg";
import GMap from "../components/GMap";
import { Autocomplete, GoogleMap } from "@react-google-maps/api";
import mapImg from "../media/Map.png";
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
  let isRest = false;
  let isDiv = false;
  let isTransp =false;

  /*function changeMapDisplay(Type) {
    console.log(Type)
    console.log(isRest)
    switch (Type) {
      case "Restaurants" :
        if (isRest == false){
          isRest = true;
          mapRefGmap.setOptions({styles:[  
            {
              "featureType": "poi.buisness",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            }]})}
        else
        {
          isRest = false;
          document.getElementById("mapVr").setOptions({styles:[  
            {
              "featureType": "poi.buisness",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }]})
        }
      case "Divertissements" :
        if (isDiv == false){
          isDiv = true;
          document.getElementById("mapVr").setOptions({styles:[  
          {
            "featureType": "poi.attraction",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          }]})}
        else{
          isDiv = false;
          document.getElementById("mapVr").GMap.setOptions({styles:[  
            {
              "featureType": "poi.attraction",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }]})
        }
        case "Transports" :
          if (isTransp == false){
            isTransp = true;
            document.getElementById("mapVr").setOptions({styles:[  
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "on"
                  }
                ]
          }]})}
          else {
            isTransp =false;
            document.getElementById("mapVr").setOptions({styles:[  
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              }]})
          }
        }
      }*/
    
  
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
          <fieldset title ="brgrMenu">
            <Autocomplete
              onLoad={(autocomplete) => setAutocomplete(autocomplete)}
              onPlaceChanged={() => {
                setValueLocation(autocomplete.getPlace());
              }}
            >
              <input
                id="brgTxtQry"
                type="text"
              />
            </Autocomplete>
            <label for = "Restaurants">Restaurants et Hotels</label>
            <input type="checkbox" id="Restaurants" title="Restaurants" name="Restaurants"></input>
            <label for = "Divertissements">Divertissements</label>
            <input type="checkbox" id="Divertissements" title="Divertissements" name="Divertissements" ></input>
            <label for = "Tranports">Transports</label>
            <input type="checkbox" id="Transports" title="Transports" name="Transports" ></input>
          </fieldset>
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
