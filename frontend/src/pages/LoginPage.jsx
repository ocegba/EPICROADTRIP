import React, { useState } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import { connect } from "react-redux";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { login } from "../services/auth";

export default connect(({ isLoading, error  }) => ({ isLoading, error  }), { login})(
  (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = () => {
      if (email === "" || password === "") {
        setError("Champs requis");
        return;
      }
      const user = { Email: email, Password: password };
      props.login({ user });

      if (props.error !== ""){
        setError(props.error);
      }

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
              Vous n'êtes pas inscrit ?{" "}
              <a href="/register">Inscrivez-vous ici</a>
            </p>
            {error && (
              <Alert severity="error" onClick={() => setError(null)}>
                {error}
              </Alert>
            )}
          </form>
        </div>
        <div className="Image">
          <img src={voyageursImg} alt="Voyageurs Sur Une Colline" />
        </div>
      </div>
    );
  }
);
