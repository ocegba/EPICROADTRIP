import React, { useState } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

function Iteneraire() {
  return (
    <div>
      <h1>Les itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer les itinéraires publiés</h3>
    </div>
  );
}

function Admin() {
  const [adhOpen, setAdhOpen] = useState(false);
  const [itnOpen, setItnOpen] = useState(false);

  const handleItnClick = () => {
    setItnOpen(true);
    setAdhOpen(false);
  };

  const handleAdhClick = () => {
    setItnOpen(false);
    setAdhOpen(true);
  };

  return (
    <div className="Profil">
      <div className="SideBar">
          <button
            className={adhOpen ? "selected" : ""}
            onClick={handleAdhClick}
          >
            Les adhérents
            <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
          </button>
          <div className="line"></div>
          <button
            className={itnOpen ? "selected" : ""}
            onClick={handleItnClick}
          >
            Les itinéraires
            <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
          </button>
      </div>
      {itnOpen && !adhOpen ? <Iteneraire /> : <AdhFct />}
    </div>
  );
}

export default Admin;