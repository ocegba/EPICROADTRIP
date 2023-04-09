import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import { connect } from "react-redux";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";

import { login } from "../services/auth";

const LoginPage = ({ login, errorReq, isAuthUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  async function submitForm({ login, errorReq }) {

    const user = { Email: email, Password: password };
    if (email === "" || password === "") {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Adresse e-mail invalide");
      return;
    }

    try {
      await login({ user });
    } catch (error) {
      setOpen(true);
      setError(error);
    }

    if (errorReq !== undefined) {
      setOpen(true);
      setError(errorReq?.message);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError("");
  };

  if (isAuthUser) {
    window.location.reload();
  }

  return (
    <div className="LoginPage">
      <div className="Formulaire">
        <h1>Welcome back!</h1>
        <h3>Entrez vos informations afin de vous connecter</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm({ login, errorReq, isAuthUser });
          }}
        >
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
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="btn-ident"
            size="large"
          >
            S'identifier
          </Button>
          <p>
            Vous n'êtes pas inscrit ? <a href="/login">Inscrivez-vous ici</a>
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
};

const mapStateToProps = (state) => ({
  errorReq: state.error?.data,
  isAuthUser: state.isAuthUser,
});

export default connect(mapStateToProps, { login })(LoginPage);