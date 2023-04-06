import React, { useState, useEffect, useRef  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import { blue, grey, red, green, orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HotelIcon from "@mui/icons-material/Hotel";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

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
      const localisation = response.results[0].formatted_address;
      results.push({ localisation });
    }
  } catch (error) {
    console.error(error);
  }
  return results;
}

const TripCardUser = ({
  tripId,
  adresse,
  Drink,
  Eat,
  Sleep,
  Enjoy,
  LikesNumbers,
  deleteMyTrip,
}) => {
  const [err, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError("");
    setSuccess("");
  };

  const submitDeleteForm = () => {
    try {
      deleteMyTrip(tripId);
      setSuccess(true);
      setOpen(true);
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      setSuccess(false);
      setOpen(true);
    }
  };

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
        <CardMedia sx={{ height: "75% "}} title="trip">
          <PrintTrip results={results}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {Drink ? (
              <LocalBarIcon sx={{ color: blue[500], padding: "2px" }} />
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
              <SportsBasketballIcon
                sx={{ color: orange[500], padding: "2px" }}
              />
            ) : (
              ""
            )}
            <tr />
            <Icon>
              <FavoriteIcon
                sx={{ color: red[500] }}
                aria-label="delete"
                size="large"
              />
            </Icon>
            {LikesNumbers}
            <br />
          </Typography>
        </CardContent>

          <CardActions>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={submitDeleteForm}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>

      </Card>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <div>
          {success && (
            <Alert onClose={handleClose} severity="success">
              Trip supprimé !
            </Alert>
          )}
          {err && (
            <Alert onClose={handleClose} severity="error">
              {err}
            </Alert>
          )}
        </div>
      </Snackbar>
    </div>
  );
};
export default TripCardUser;
