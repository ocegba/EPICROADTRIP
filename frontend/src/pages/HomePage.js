import React, { useState, useRef } from "react";
import peacevalleyImg from "../media/PeaceValley.jpg";
import { Autocomplete, GoogleMap } from "@react-google-maps/api";
import mapImg from "../media/Map.png";

import Icon from "@mui/material/Icon";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Travel from "../components/Cards/CreateTravel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { createMyTrip } from "../services/trips";
import { connect } from "react-redux";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomePage = ({ isAuthUser, userId, createMyTrip }) => {
  const [mpOpen, mpIsOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [valueLocation, setValueLocation] = useState("");
  const [GMap, setGmap] = useState();
  const [tableauCoordonnees, setTableauCoordonnees] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [drink, setDrink] = useState(false);
  const [eat, setEat] = useState(false);
  const [travel, setTravel] = useState(false);
  const [sleep, setSleep] = useState(false);
  const [enjoy, setEnjoy] = useState(false);

  const MapStyle = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
  ];

  const initialCoordinates = {
    lat: -3.745,
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

  function ajouterCoordonnees(lat, long) {
    let coordonnees = {
      lat: lat,
      lng: long,
    };
    setTableauCoordonnees([...tableauCoordonnees, coordonnees]);
  }

  function clickOnMap(event) {
    const cLat = event.latLng.lat();
    const cLng = event.latLng.lng();
    ajouterCoordonnees(cLat, cLng);
  }

  function supprimerCoordonnees(index) {
    setTableauCoordonnees(tableauCoordonnees.filter((_, i) => i !== index));
  }

  function setMap(map) {
    if (map !== undefined) {
      setGmap(map);
      map.setOptions({ styles: MapStyle });
    }
  }

  function newCenterMap(newLoc) {
    if (GMap !== undefined) {
      const cLat = newLoc.geometry.location.lat();
      const cLng = newLoc.geometry.location.lng();
      let panLoc = {
        lat: cLat,
        lng: cLng,
      };
      GMap.setCenter(panLoc);
      GMap.setZoom(10);
    }
  }

  function changeMapDisplay(Type) {
    if (GMap !== null || GMap !== undefined) {
      if (Type === "Restaurants") {
        let mapSwitchRestaurants = [
          {
            featureType: "poi.business.food_and_drink",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
        ];
        GMap.setOptions({ styles: mapSwitchRestaurants });
      } else if (Type === "Divertissements") {
        let mapSwitchDivert = [
          {
            featureType: "poi.business.food_and_drink",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
        ];
        GMap.setOptions({ styles: mapSwitchDivert });
      } else if (Type === "Transports") {
        let mapSwitchTrsp = [
          {
            featureType: "poi.business.food_and_drink",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "on" }],
          },
        ];
        GMap.setOptions({ styles: mapSwitchTrsp });
      } else if (Type === "Hôtels") {
        let mapSwitchHotels = [
          {
            featureType: "poi.business.food_and_drink",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.shopping",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.gas_station",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.car_rental",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business.lodging",
            stylers: [{ visibility: "on" }],
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
        ];
        GMap.setOptions({ styles: mapSwitchHotels });
      }
    }
  }

  function tripCreate(adresse, drink, eat, travel, sleep, enjoy) {
    return {
      UserIdCreated: userId,
      Adresse: adresse,
      Drink: drink,
      Eat: eat,
      Travel: travel,
      Sleep: sleep,
      Enjoy: enjoy,
      LikesNumbers: 0,
      Published: true,
      userIdCreatedId: userId,
    };
  }

  function handleSubmit() {
    try {
      const trip = tripCreate(
        JSON.stringify(tableauCoordonnees),
        drink,
        eat,
        travel,
        sleep,
        enjoy
      );
      createMyTrip(trip);
      alert(
        "Vous venez de créer un voyage ! Vous pouvez le retrouvez dans votre page Profil"
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="HomePage">
      {!mpOpen ? (
        <div className="srchPlc">
          <img src={peacevalleyImg} alt="Vallée Atmosphérique"></img>
          <h1>
            Bienvenue sur Epic Road Trip, Planifiez vos voyages où découvrez
            ceux des autres !
          </h1>
          <Autocomplete
            className="SearchBar"
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
              <input id="brgTxtQry" type="text" />
            </Autocomplete>
            <label htmlFor="Restaurants">Restaurants</label>
            <input
              type="radio"
              id="Restaurants"
              title="Restaurants"
              name="Types"
              onClick={() => changeMapDisplay("Restaurants")}
            />
            <label htmlFor="Divertissements">Divertissements</label>
            <input
              type="radio"
              id="Divertissements"
              title="Divertissements"
              name="Types"
              onClick={() => changeMapDisplay("Divertissements")}
            ></input>
            <label htmlFor="Tranports">Transports</label>
            <input
              type="radio"
              id="Transports"
              title="Transports"
              name="Types"
              onClick={() => changeMapDisplay("Transports")}
            ></input>
            <label htmlFor="Hôtels">Hôtels</label>
            <input
              type="radio"
              id="Hôtels"
              title="Hôtels"
              name="Types"
              onClick={() => changeMapDisplay("Hôtels")}
            ></input>
          </fieldset>
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={mapCenter}
              zoom={mapZoom}
              onLoad={(map) => setMap(map)}
              onClick={(e) => clickOnMap(e)}
            ></GoogleMap>
          </div>
        </div>
      )}

      {mpOpen ? (
        <div className="travel-entete">
          <div>
            <Icon aria-label="travel">
              <FlightTakeoffIcon />
            </Icon>
            <h3>Voyage</h3>
            <div className="listeCoordonnees" id="liste-coordonnees">
              <div>
                <Travel
                  coordonnees={tableauCoordonnees}
                  supprimerCoordonnees={supprimerCoordonnees}
                />
                <div
                  title={
                    !isAuthUser
                      ? "Pour pouvoir valider ce voyage, connectez-vous !"
                      : tableauCoordonnees.length === 0
                      ? "Ajoutez au moins un endroit"
                      : ""
                  }
                >
                  <Button
                    variant="contained"
                    size="medium"
                    disabled={!isAuthUser || tableauCoordonnees.length === 0}
                    onClick={handleOpen}
                  >
                    Valider l'itinéraire
                  </Button>
                </div>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styleModal} className="ModalValidItn">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Est ce que votre trajet contient les élements suivants ?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <label>
                        Boire:
                        <input
                          type="checkbox"
                          checked={drink}
                          onChange={(event) => setDrink(event.target.checked)}
                        />
                      </label>
                      <label>
                        Manger
                        <input
                          type="checkbox"
                          checked={eat}
                          onChange={(event) => setEat(event.target.checked)}
                        />
                      </label>
                      <label>
                        Transports
                        <input
                          type="checkbox"
                          checked={travel}
                          onChange={(event) => setTravel(event.target.checked)}
                        />
                      </label>
                      <label>
                        Dormir
                        <input
                          type="checkbox"
                          checked={sleep}
                          onChange={(event) => setSleep(event.target.checked)}
                        />
                      </label>
                      <label>
                        Divertissements
                        <input
                          type="checkbox"
                          checked={enjoy}
                          onChange={(event) => setEnjoy(event.target.checked)}
                        />
                      </label>
                      <Button
                        variant="contained"
                        size="medium"
                        {...(!isAuthUser ? { disabled: true } : {})}
                        onClick={() => {
                          handleSubmit();
                          handleClose();
                        }}
                      >
                        Valider l'itinéraire
                      </Button>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthUser: !!localStorage.getItem("isAuthUser"),
  userId: localStorage.getItem("userId"),
});

export default connect(mapStateToProps, {
  createMyTrip,
})(HomePage);
