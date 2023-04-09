import React, { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Icon from "@mui/material/Icon";
import { blue, grey, red, green, orange, deepPurple } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HotelIcon from "@mui/icons-material/Hotel";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

import Geocoder from "../../services/googleRequest";

import PrintTrip from "./PrintTrip";

async function getAddress(adresse) {
  const results = [];
  try {
    const objetJS = JSON.parse(
      adresse.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ')
    );
    for (let i = 0; i < objetJS.length; i++) {
      const lat = objetJS[i].lat;
      const lng = objetJS[i].lng;
      const response = await Geocoder.geocode(lat, lng);
      const result = response.results[0];
      const addressComponents = result.address_components;

      const localisation = result.formatted_address;

      let placeName = "";
      for (let component of addressComponents) {
        if (
          component.types.includes("establishment") ||
          component.types.includes("point_of_interest")
        ) {
          placeName = component.long_name;
          break;
        }
      }
      results.push({ placeName, localisation });
    }
  } catch (error) {
    console.error(error);
  }
  return results;
}

const TripCardUser = ({
  adresse,
  Drink,
  Travel,
  Eat,
  Sleep,
  Enjoy,
  LikesNumbers,
  children
}) => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAddress(adresse);
      setResults(data);
    }
    fetchData();
  }, [adresse]);

  return (
    <div className="TripCardUser">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: "75% " }} title="trip">
          <PrintTrip results={results} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {Drink ? (
              <LocalBarIcon sx={{ color: blue[500], padding: "2px" }} />
            ) : (
              ""
            )}
            {Travel ? (
              <TimeToLeaveIcon sx={{ color: deepPurple[500], padding: "2px" }} />
            ) : (
              ""
            )}
            {Eat ? (
              <FastfoodIcon sx={{ color: red[500], padding: "2px" }} />
            ) : (
              ""
            )}
            {Sleep ? (
              <HotelIcon sx={{ color: green[500], padding: "2px" }} />
            ) : (
              ""
            )}
            {Enjoy ? (
              <SportsBasketballIcon sx={{ color: orange[500], padding: "2px" }} />
            ) : (
              ""
            )}
            <br />
            <Icon>
              <FavoriteIcon
                sx={{ color: red[500] }}
                aria-label="delete"
                size="large"
              />
            </Icon>
            {LikesNumbers}
          </Typography>
        </CardContent>
          {children}
        <CardActions>

        </CardActions>
      </Card>

    </div>
  );
};
export default TripCardUser;
