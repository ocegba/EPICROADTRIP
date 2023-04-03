import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import UserImage from "../../media/User.png";

const UserCards = ({ username, id, email, Created_at, deleteUser, role }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Europe/Paris",
  };
  const date = new Date(Created_at);
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError("");
    setSuccess("");
  };

  const [err, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  const submitForm = () => {
    try {
      deleteUser(id);
      setSuccess(true);
      setOpen(true);
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      setSuccess(false);
      setOpen(true);
    }
  };

  return (
    <div>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 120 }}
          image={UserImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role} <br />
            {email}
            <br />
            {formattedDate}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={submitForm}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <div>
          {success && (
            <Alert onClose={handleClose} severity="success">
              Adhérant supprimé !
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
}
export default UserCards;