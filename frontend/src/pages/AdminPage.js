import React, { useState } from "react";

function ItnFct() {
  return (
    <div>
      <h1>Les adhérents</h1>
      <h3>Dans cette section, vous pouvez supprimer les comptes des adhérents</h3>
    </div>
  );
}

function Reglages() {
  return (
    <div>
      <h1>Les itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer les itinéraires publiés</h3>
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
            Les adhérents
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              itnIsOpen(false);
              regIsOpen(true);
            }}
          >
            Les itinéraires
          </button>
        </div>
      </div>
      {regOpen && !itnOpen ? <Reglages /> : <ItnFct />}
    </div>
  );
}

export default Profil;