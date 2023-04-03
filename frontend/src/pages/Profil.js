import React, { useState } from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Icon from "@mui/material/Icon";

import { connect } from "react-redux";
import { updateUser, deleteUser } from "../services/user";
import { logout } from "../services/auth";

import Reglages from "../components/Reglages"

const ItnFct = () => {
  return (
    <div>
      <h1>Mes itinéraires</h1>
      <h3>
        Dans cette section, vous pouvez supprimer, imprimer ou publier les
        itinéraires
      </h3>
    </div>
  );
}

const Profil = ({user, updateUser, deleteUser, logout }) => {
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
        <button className={itnOpen ? "selected" : ""} onClick={handleItnClick}>
          Mes itinéraires
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
        <div className="line"></div>
        <button className={regOpen ? "selected" : ""} onClick={handleRegClick}>
          Mes réglages
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
      </div>
      {itnOpen && <ItnFct />}
      {regOpen && <Reglages ID={user.Id} updateUser={updateUser} deleteUser={deleteUser} logout={logout} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { updateUser, deleteUser, logout })(Profil);
