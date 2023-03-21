import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

//import { TextField, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import { login } from "../services/auth";

function Alert_page(props) {
  return <Alert severity="error" elevation={6} variant="filled" {...props} />;
}

export default connect(({ isLoading }) => ({ isLoading }), { login }) ( props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    const user = { Email: email, Password: password }
    props.login(user);
  };

  return (
    <div>
      <h1>Welcome back!</h1>
      <h3>Entrez vos informations afin de vous connecter</h3>

      <form>
        <label id="email-label">Email</label>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label id="password-label">Mot de passe</label>
        <TextField
          label="Password"
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
          className="form-input"
          size="large"
          onClick={submitForm}
        >
          S'identifier
        </Button>
        <p>
          Vous n'êtes pas inscrit ?{" "}
          <a href="/inscription">Inscrivez-vous ici</a>
        </p>
        {error && (
          <Alert severity="error" onClick={() => setError(null)}>
            {props.error || error}
          </Alert>
        )}
      </form>
      <div>
        <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
      </div>
    </div>
  );
})