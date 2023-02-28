import React, { useState } from "react";

function AdhFct() {
  return (
    <div>
      <h1>Les adhérents</h1>
      <h3>
        Dans cette section, vous pouvez supprimer les comptes des adhérents
      </h3>
    </div>
  );
}

function ItnFct() {
  return (
    <div>
      <h1>Les itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer les itinéraires publiés</h3>
    </div>
  );
}

function Admin() {
  const [adhOpen, adhIsOpen] = useState(false);
  const [itnOpen, itnIsOpen] = useState(false);

  return (
    <div>
      <div className="SideBar">
        <div>
          <button
            onClick={() => {
              adhIsOpen(true);
              itnIsOpen(false);
            }}
          >
            Les adhérents
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              adhIsOpen(false);
              itnIsOpen(true);
            }}
          >
            Les itinéraires
          </button>
        </div>
      </div>
      {itnOpen && !adhOpen ? <ItnFct /> : <AdhFct />}
    </div>
  );
}

export default Admin;