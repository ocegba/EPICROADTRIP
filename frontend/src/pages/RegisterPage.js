import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { connect } from "react-redux";
import { register } from "../services/auth";

export default connect( ({ isLoading, error }) => ({ isLoading, error }), {register})

((props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  const dateString = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  const date = new Date(Date.parse(dateString));
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Notez que getMonth() renvoie les mois de 0 à 11, d'où l'ajout de 1 ici.
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const submitForm = () => {
    try {
      if (email === "" || password === "") {
        setError("Champs requis");
        return;
      }
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      const user = { Username:username, Email: email, IdRole: "user", Password: password, Created_at: formattedDate}
      props.register(user);

      if (props.error !== undefined) {
        setOpen(true);
        setError(props.error?.data?.message);
      } else {
        setSuccess(true);
        setOpen(true);
        window.location.href = "/login"
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      setSuccess(false);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError("");
    setSuccess("");
  };
  return (
    <div className="RegisterPage">
      <div className="Formulaire">
        <h1>Welcome back!</h1>
        <h3>Entrez vos informations afin de vous inscrire</h3>
        <form>
          <label id="username-label">Username</label>
          <TextField
            variant="outlined"
            fullWidth
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label id="email-label">Email</label>
          <TextField
            variant="outlined"
            fullWidth
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />

          <label id="password-label">Mot de passe</label>
          <TextField
            variant="outlined"
            fullWidth
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="btn-ident"
            size="large"
            onClick={submitForm}
          >
            S'inscrire
          </Button>
          <p>
            Vous êtes déjà inscrit ?{" "}
            <a href="/login">Identifiez-vous ici</a>
          </p>
          {success && (
            <Alert onClose={handleClose} severity="success">
              Vous êtes inscrit vous allez être redirigé d'identification !
            </Alert>
          )}
          {error && (
            <Alert severity="error" onClick={() => setError(null)}>
              {props.error || error}
            </Alert>
          )}
        </form>
      </div>
      <div className="Image">
        <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
      </div>
    </div>
  );
});