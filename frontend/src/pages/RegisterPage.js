import React, { useState, useEffect } from "react";
import voyageursImg from "../media/voyageurs.jpg";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { connect } from "react-redux";
import { register } from "../services/auth";

const RegisterPage = ({ register, statusRequest }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (statusRequest?.message === "Successfully create user profile") {
      setOpen(true);
      setSuccess(true);
      setTimeout(function(){
        window.location.href = "/login";
      }, 5000);
    } else if (statusRequest !== undefined && statusRequest.status === 400) {
      setOpen(true);
      setError(statusRequest?.message);
      setSuccess(false);
    }
  }, [statusRequest]);

  async function submitForm({ register, statusRequest }) {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      setError("Champs requis");
      return;
    }

    // Validation supplémentaire pour s'assurer que l'email est bien formé
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Adresse e-mail invalide");
      return;
    }

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    const user = {
      Username: username,
      Email: email,
      IdRole: "user",
      Password: password,
      Created_at: formattedDate,
    };

    try {
      await register(user);
    } catch (error) {
      setOpen(true);
      setError(error);
      setSuccess(false);
    }

    if (statusRequest?.message === "Successfully create user profile") {
      setOpen(true);
      setSuccess(true);
      setTimeout(function(){
        window.location.href = "/login";
      }, 15);
    }

    if (statusRequest !== undefined && statusRequest.status === 400) {
      setOpen(true);
      setError(statusRequest?.message);
      setSuccess(false);
    }
  }

  return (
    <div className="RegisterPage">
      <div className="Formulaire">
        <h1>Welcome back!</h1>
        <h3>Entrez vos informations afin de vous inscrire</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm({ register, statusRequest });
          }}
        >
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
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="btn-ident"
            size="large"
          >
            S'inscrire
          </Button>
          <p>
            Vous êtes déjà inscrit ? <a href="/login">Identifiez-vous ici</a>
          </p>
          {success && (
            <Alert severity="success" onClick={() => setSuccess(null)} >
              Vous êtes inscrit vous allez être redirigé d'identification !
            </Alert>
          )}
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
};

const mapStateToProps = (state) => ({
  statusRequest: state.statusRequest,
});

export default connect(mapStateToProps, { register })(RegisterPage);