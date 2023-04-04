import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Reglages = ({ ID, updateUser, deleteUser, logout }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [open, setOpen] = useState(false);

  const editForm = () => {
    const user = { Username: username, Email: email, Password: password };
    if (email === "" || password === "" || username === "") {
      setError("Veuillez remplir tous les champs.");
      setSuccess(false);
      setOpen(true);
      return;
    }

    try {
      updateUser(ID, user);
      setSuccess(true);
      setOpen(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      setSuccess(false);
      setOpen(true);
    }
  };

  const submitForm = () => {
    try {
      deleteUser(ID);
      logout();
      setSuccess(true);
      setOpen(true);
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
    <div>
      <h1>Mes réglages</h1>
      <h3>
        Dans cette section, vous pouvez éditer votre profil ou supprimer votre
        compte
      </h3>

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
          InputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
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
          InputProps={{
            min: 8,
            maxLength: 12,
            pattern:
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
          }}
          helperText="Le mot de passe doit comporter au moins 8 caractères, avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial"
        />

        <Button
          variant="contained"
          fullWidth
          className="edit-input"
          onClick={editForm}
        >
          Modifier
        </Button>

        <Button
          variant="contained"
          fullWidth
          className="delete-btn"
          onClick={submitForm}
        >
          Supprimer mon compte
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <div>
          {success && (
            <Alert onClose={handleClose} severity="success">
              Opération réussie !
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

export default Reglages;
