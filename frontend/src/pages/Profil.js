import React, { useState } from "react";

function ItnFct() {
  return (
    <div>
      <h1>Mes itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer, imprimer ou publier les itinéraires</h3>
    </div>
  );
}

function Reglages() {
  return (
    <div>
      <h1>Mes réglages</h1>
      <h3>Dans cette section, vous pouvez éditer votre profil</h3>

      <div>
      <label id="username-label">Username</label>
        <input aria-labelledby="username-label" />

        <label id="email-label">Email</label>
        <input aria-labelledby="email-label" />

        <label id="password-label">Mot de passe</label>
        <input aria-labelledby="password-label" />

        <button>Modifier</button>

        <button>Supprimer mon compte</button>
      </div>
    </div>
  );
}

function Profil() {
  const [itnOpen, itnIsOpen] = useState(false);
  const [regOpen, regIsOpen] = useState(false);

  return (
    <div>
      <div className="SideBar">
        <div>
          <button
            onClick={() => {
              itnIsOpen(true);
              regIsOpen(false);
            }}
          >
            Mes itinéraires
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              itnIsOpen(false);
              regIsOpen(true);
            }}
          >
            Mes réglages
          </button>
        </div>
      </div>
      {regOpen && !itnOpen ? <Reglages /> : <ItnFct />}
    </div>
  );
}

export default Profil;
