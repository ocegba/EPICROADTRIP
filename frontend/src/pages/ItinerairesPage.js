import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllPublicTrips } from "../services/trips";
import { updateLikes } from "../services/likes";

import Cards from "../components/Cards/OnItnPageCards";

import LRU from "lru-cache";

import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { blue, grey, red, green, orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HotelIcon from "@mui/icons-material/Hotel";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const cache = new LRU({ max: 10000 });

const ItinerairesPage = ({
  userId,
  trips,
  isAuthUser,
  getAllPublicTrips,
  updateLikes,
  message,
}) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedEat, setSelectedEat] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  const [selectedEnjoy, setSelectedEnjoy] = useState(null);
  const [selectedTravel, setSelectedTravel] = useState(null);

  const [likesNumberMin, setLikesNumberMin] = useState(0);
  const [likesNumberMax, setLikesNumberMax] = useState(0);

  const [filteredTrips, setFilteredTrips] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const cacheKey = "publicTrips";
    const cachedTrips = cache.get(cacheKey);

    if (cachedTrips !== undefined) {
      const allfilteredTrips = cachedTrips.filter((trip) => {
        let likesInRange =
          trip.LikesNumbers >= likesNumberMin &&
          trip.LikesNumbers <= likesNumberMax;
        let isSelectedDrink =
          selectedDrink === null ||
          (selectedDrink === "true" && Boolean(trip.Drink)) ||
          (selectedDrink === "false" && !Boolean(trip.Drink));
        let isSelectedEat =
          selectedEat === null ||
          (selectedEat === "true" && Boolean(trip.Eat)) ||
          (selectedEat === "false" && !Boolean(trip.Eat));
        let isSelectedSleep =
          selectedSleep === null ||
          (selectedSleep === "true" && Boolean(trip.Sleep)) ||
          (selectedSleep === "false" && !Boolean(trip.Sleep));
        let isSelectedEnjoy =
          selectedEnjoy === null ||
          (selectedEnjoy === "true" && Boolean(trip.Enjoy)) ||
          (selectedEnjoy === "false" && !Boolean(trip.Enjoy));
        let isSelectedTravel = 
            selectedTravel === null ||
            (selectedTravel === "true" && Boolean(trip.Travel)) ||
            (selectedTravel === "false" && !Boolean(trip.Travel));
        return (
          likesInRange &&
          isSelectedDrink &&
          isSelectedEat &&
          isSelectedSleep &&
          isSelectedEnjoy && isSelectedTravel
        );
      });
      setFilteredTrips(allfilteredTrips);
    } else {
      getAllPublicTrips(userId);
      if (trips) {
        const allfilteredTrips = trips.filter((trip) => {
          let likesInRange =
            trip.LikesNumbers >= likesNumberMin &&
            trip.LikesNumbers <= likesNumberMax;
            let isSelectedDrink = selectedDrink === null ||
            (selectedDrink === "true" && Boolean(trip.Drink)) ||
            (selectedDrink === "false" && !Boolean(trip.Drink));
        
          let isSelectedEat = selectedEat === null ||
            (selectedEat === "true" && Boolean(trip.Eat)) ||
            (selectedEat === "false" && !Boolean(trip.Eat));
        
          let isSelectedSleep = selectedSleep === null ||
            (selectedSleep === "true" && Boolean(trip.Sleep)) ||
            (selectedSleep === "false" && !Boolean(trip.Sleep));
        
          let isSelectedEnjoy = selectedEnjoy === null ||
            (selectedEnjoy === "true" && Boolean(trip.Enjoy)) ||
            (selectedEnjoy === "false" && !Boolean(trip.Enjoy));

          let isSelectedTravel = selectedTravel === null ||
            (selectedTravel === "true" && Boolean(trip.Travel)) ||
            (selectedTravel === "false" && !Boolean(trip.Travel));
          return (
            likesInRange &&
            isSelectedDrink &&
            isSelectedEat &&
            isSelectedSleep &&
            isSelectedEnjoy &&
            isSelectedTravel
          );
        });
        setFilteredTrips(allfilteredTrips);
        cache.set(cacheKey, allfilteredTrips);
      }
    }
  }, [
    refresh,
    selectedDrink,
    selectedEat,
    selectedSleep,
    selectedTravel,
    selectedEnjoy,
    likesNumberMin,
    likesNumberMax,
  ]);

  useEffect(() => {
    getAllPublicTrips(userId);
  }, [getAllPublicTrips, userId]);

  const handleLikeClick = async (tripId) => {
    await updateLikes(tripId, userId);
    setRefresh(!refresh);
    window.location.reload()
  }

  return (
    <div className="PublicItn">
      <h1>Itinéraires</h1>
      <div className="Filters">
        <label><LocalBarIcon sx={{ color: blue[500], padding: "2px" }} />Drink : </label>
        <select onChange={(e) => setSelectedDrink(e.target.value)}>
          <option value=""></option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
        <label><FastfoodIcon sx={{ color: red[500], padding: "2px" }} />Eat : </label>
        <select onChange={(e) => setSelectedEat(e.target.value)}>
          <option value=""></option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
        <label><HotelIcon sx={{ color: green[500], padding: "2px" }} />Sleep : </label>
        <select onChange={(e) => setSelectedSleep(e.target.value)}>
          <option value=""></option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
        <label><LocalBarIcon sx={{ color: blue[500], padding: "2px" }} />Travel : </label>
        <select onChange={(e) => setSelectedTravel(e.target.value)}>
          <option value=""></option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
        <label><SportsBasketballIcon sx={{ color: orange[500], padding: "2px" }} />Enjoy : </label>
        <select onChange={(e) => setSelectedEnjoy(e.target.value)}>
          <option value=""></option>
          <option value="true">Oui</option>
          <option value="false">Non</option>
        </select>
        <label><FavoriteIcon sx={{ color: red[500] }} />Likes : </label>
        <input
          type="range"
          min={0}
          max={10000}
          value={likesNumberMax}
          onChange={(e) => setLikesNumberMax(parseInt(e.target.value))}
        />
      </div>
      <div className="Cards">
        {filteredTrips ? (
          filteredTrips.length > 0 ? (
            filteredTrips.map(function (trip) {
              return (
                <Cards
                  key={trip.Id}
                  adresse={trip.Adresse}
                  Drink={trip.Drink}
                  Travel={trip.Travel}
                  Eat={trip.Eat}
                  Sleep={trip.Sleep}
                  Enjoy={trip.Enjoy}
                  LikesNumbers={String(trip.LikesNumbers)}
                  children={
                    <div>
                      {isAuthUser ? (
                        trip.isLiked ? (
                          <IconButton
                            aria-label="delete"
                            size="large"
                            onClick={() => handleLikeClick(trip.Id)}
                          >
                            <FavoriteIcon sx={{ color: red[500] }} />
                          </IconButton>
                        ) : (
                          <IconButton
                            aria-label="delete"
                            size="large"
                            onClick={() => handleLikeClick(trip.Id)}
                          >
                            <FavoriteIcon sx={{ color: grey[500] }} />
                          </IconButton>
                        )
                      ) : (
                        <IconButton disabled>
                          <FavoriteIcon sx={{ color: grey[500] }} />
                        </IconButton>
                      )}
                    </div>
                  }
                />
              );
            })
          ) : (
            <div>Aucun résultat</div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statusRequest: state.statusRequest,
  userId: localStorage.getItem("userId"),
  trips: state.tripsLiked,
  isAuthUser: state.isAuthUser,
  message: state?.likes?.message,
});

export default connect(mapStateToProps, {
  getAllPublicTrips,
  updateLikes,
})(ItinerairesPage);
