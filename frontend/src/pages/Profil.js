import React, { useState } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ItnFct() {
  return (
    <div>
      <h1>Mes itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer, imprimer ou publier les itinéraires</h3>
    </div>
  );
}

function Reglages() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "" || username === "") {
      setError("Champs requis");
      return;
    }
    //const user = { Username: username, Email: email, Password: password }
    //props.login(user);
  };
  return (
    <div>
      <h1>Mes réglages</h1>
      <h3>Dans cette section, vous pouvez éditer votre profil</h3>

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
            fullWidth
            className="edit-input"
            onClick={submitForm}
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
    </div>
  );
}

export default function Profil() {
  const [itnOpen, setItnOpen] = useState(true);
  const [regOpen, setRegOpen] = useState(false);

  const handleItnClick = () => {
    setItnOpen(true);
    setRegOpen(false);
  };

  const handleRegClick = () => {
    setItnOpen(false);
    setRegOpen(true);
  };

  return (
    <div className="Profil">
      <div className="SideBar">
        <button
          className={itnOpen ? "selected" : ""}
          onClick={handleItnClick}
        >
          Mes itinéraires
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
        <div className="line"></div>
        <button
          className={regOpen ? "selected" : ""}
          onClick={handleRegClick}
        >
          Mes réglages
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
      </div>
      {regOpen && !itnOpen ? <Reglages /> : <ItnFct />}
    </div>
  );
}
