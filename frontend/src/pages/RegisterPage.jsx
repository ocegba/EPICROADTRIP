import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { connect } from "react-redux";

export default connect(
  ({ isLoading }) => ({ isLoading }),
  {}
)((props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Champs requis");
      return;
    }
    //const user = { Email: email, Password: password }
    //props.login(user);
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
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" }}
            helperText="Veuillez entrer une adresse e-mail valide"
          />

          <label id="password-label">Mot de passe</label>
          <TextField
            variant="outlined"
            fullWidth
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{ pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})" }}
            helperText="Le mot de passe doit comporter au moins 8 caractères, avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial"
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