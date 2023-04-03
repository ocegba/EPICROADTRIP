import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import { connect } from "react-redux";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";

import { login } from "../services/auth";

export default connect(({ isLoading, error }) => ({ isLoading, error }), {
  login,
})((props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const submitForm = () => {
    const user = { Email: email, Password: password };
    if (email === "" || password === "") {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    props.login({ user });

    if (props.error !== undefined) {
      setOpen(true);
      setError(props.error?.data?.message);
    }

  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError("");
  };

  return (
    <div className="LoginPage">
      <div className="Formulaire">
        <h1>Welcome back!</h1>
        <h3>Entrez vos informations afin de vous connecter</h3>

        <form>
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
            S'identifier
          </Button>
          <p>
            Vous n'êtes pas inscrit ? <a href="/register">Inscrivez-vous ici</a>
          </p>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <div>
          {error && (
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          )}
        </div>
      </Snackbar>
      <div className="Image">
        <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
      </div>
    </div>
  );
});
