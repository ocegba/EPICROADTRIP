import React, { useState, useRef } from "react";
import peacevalleyImg from "../media/PeaceValley.jpg";
import { Autocomplete, GoogleMap} from "@react-google-maps/api";
import mapImg from "../media/Map.png";
import Icon from "@mui/material/Icon";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
function HomePage() {
  const [mpOpen, mpIsOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [valueLocation, setValueLocation] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [GMap ,setGmap] = useState() 
  const MapStyle = [
    {
        featureType: "poi",
          stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
        stylers: [{ visibility: "off" }]
    }
    ]
  const initialCoordinates = {
    lat: -3.745,
    lng: -38.523,
    lng: -38.523,
  };
  const mapZoom = 10;

  const containerStyle = {
    width: "1080px",
    height: "920px",
  };
  const [mapCenter, setMapCenter] = useState(initialCoordinates);
  let isRest = false;
  let isDiv = false;
  let isTransp = false;
  function centerMap(valueLocation) {
    setValueLocation(valueLocation);
    setMapCenter({
      lat: valueLocation.geometry.location.lat(),
      lng: valueLocation.geometry.location.lng(),
    });
  }
  function clickOnMap(event){
    const cLat = event.latLng.lat();
    const cLng = event.latLng.lng();
    setCoordinates({
      lat: cLat,
      lng: cLng,
    });
  }
  function setMap(map){
    if(map != undefined)
    {
    setGmap(map)
    map.setOptions({styles:MapStyle})
    }
  }
  function newCenterMap(newLoc){
    if(GMap != undefined)
    {
    const cLat = newLoc.geometry.location.lat();
    const cLng = newLoc.geometry.location.lng();
    let panLoc = {
      lat: cLat,
      lng: cLng
    }
    GMap.setCenter(panLoc);
    GMap.setZoom(10)
  }
  }
  function changeMapDisplay(Type) {
    if(GMap != null || GMap != undefined) {
      if(Type == "Restaurants") {
          let mapSwitchRestaurants = 
          [
          {
            featureType: "poi.business.food_and_drink",
             stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }]
          }
          ]
          GMap.setOptions({styles:mapSwitchRestaurants});}    
      else if (Type == "Divertissements") {
        let mapSwitchDivert = 
        [
          {
            featureType: "poi.business.food_and_drink",
             stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }]
          }
          ]
          GMap.setOptions({styles:mapSwitchDivert});}
        else if (Type =="Transports") {
          let mapSwitchTrsp = 
          [
          {
            featureType: "poi.business.food_and_drink",
             stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "on" }]
          }
          ]
          GMap.setOptions({styles:mapSwitchTrsp});}
          }
        }
      
    

  return (
    <div>
      {!mpOpen ? (
        <div title="srchPlc">
          <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
          <h1>
            Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez
            ceux des autres !
          </h1>
          <Autocomplete
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={() => {
              centerMap(autocomplete.getPlace());
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
          <fieldset title="brgrMenu">
            <Autocomplete
              onLoad={(autocomplete) => setAutocomplete(autocomplete)}
              onPlaceChanged={() => {
                newCenterMap(autocomplete.getPlace());
              }}
            >
              <input
                id="brgTxtQry"
                type="text"
              />
            </Autocomplete>
            <label for="Restaurants">Restaurants et Hotels</label>
            <input type="radio" id="Restaurants" title="Restaurants" name="Types" onClick={() => changeMapDisplay("Restaurants")}/>
            <label for="Divertissements">Divertissements</label>
            <input type="radio" id="Divertissements" title="Divertissements" name="Types" onClick={() => changeMapDisplay("Divertissements")} ></input>
            <label for="Tranports">Transports</label>
            <input type="radio" id="Transports" title="Transports" name="Types" onClick={() => changeMapDisplay("Transports")}></input>
          </fieldset>
          <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={mapZoom}
            onLoad={(map) => setMap(map) }
            onClick={(e) =>clickOnMap(e)}
          ></GoogleMap>
          </div>
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
