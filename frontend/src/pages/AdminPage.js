import React, { useState, useEffect } from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Icon from "@mui/material/Icon";
import IconButton from '@mui/material/IconButton';
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import { connect } from "react-redux";
import { updateUser, deleteUser } from "../services/user";
import { get_all_users } from "../services/admin";
import { logout } from "../services/auth";
import { getAllPublicTrips } from "../services/trips";

import Reglages from "../components/Reglages";
import UserCards from "../components/Cards/UserCards";
import TripCardUser from "../components/Cards/PublicTripsCards";

function AdhFct({ users, deleteUser, children }) {
  return (
    <div>
      <h1>Les adhérents</h1>
      <h3>
        Dans cette section, vous pouvez supprimer les comptes des adhérents {children}
      </h3>
      <div className="Adherents">
        {users && users.length > 0 ? (
          users.map((user) => (
            <UserCards
              key={user.Id}
              username={user.Username}
              id={user.Id}
              role={user.IdRole}
              email={user.Email}
              Created_at={user.Created_at}
              deleteUser={deleteUser}
            />
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
}

function Travel({trips, deleteMyTrip}) {
  return (
    <div>
      <h1>Les itinéraires</h1>
      <h3>Dans cette section, vous pouvez supprimer les itinéraires publiés ou les imprimer</h3>
      <div className="CardsUsersViews">
        {trips && trips.length > 0 ? (
          trips.map((trip) => (
            <TripCardUser
              key={trip.Id}
              tripId={trip.Id}
              adresse={trip.Adresse}
              Drink={trip.Drink}
              Travel={trip.Travel}
              Eat={trip.Eat}
              Sleep={trip.Sleep}
              Enjoy={trip.Enjoy}
              LikesNumbers={String(trip.LikesNumbers)}
              deleteMyTrip={deleteMyTrip}
            />
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </div>
  );
}

const Admin = ({userId, users,trips, get_all_users, updateUser, deleteUser, logout, getAllPublicTrips, deleteMyTrip }) => {
  const [adhOpen, setAdhOpen] = useState(false);
  const [itnOpen, setItnOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    get_all_users();
    getAllPublicTrips();
  }, [getAllPublicTrips, get_all_users, updateTrigger]);

  const handleUpdateUsers = () => {
    setUpdateTrigger(!updateTrigger);
  };

  const handleItnClick = () => {
    setItnOpen(true);
    setAdhOpen(false);
    setRegOpen(false);
  };

  const handleAdhClick = () => {
    setItnOpen(false);
    setAdhOpen(true);
    setRegOpen(false);
  };

  const handlRegClick = () => {
    setItnOpen(false);
    setAdhOpen(false);
    setRegOpen(true);
  };

  const filteredUsers = users ? users.filter(ind => ind.Id !== userId) : [];

  return (
    <div className="Profil">
      <div className="SideBar">
        <button className={adhOpen ? "selected" : ""} onClick={handleAdhClick}>
          Les adhérents
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
        <div className="line"></div>
        <button className={itnOpen ? "selected" : ""} onClick={handleItnClick}>
          Les itinéraires
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
        <div className="line"></div>
        <button className={regOpen ? "selected" : ""} onClick={handlRegClick}>
          Mes réglages
          <Icon aria-label="travel">
            <ArrowForwardIosRoundedIcon />
          </Icon>
        </button>
      </div>
      {itnOpen ? (
        <Travel trips={trips} deleteMyTrip={deleteMyTrip}/>
      ) : regOpen ? (
        <Reglages ID={userId} updateUser={updateUser} deleteUser={deleteUser} logout={logout} />
      ) : (
        <AdhFct users={filteredUsers} deleteUser={deleteUser} children={
          <IconButton aria-label="refresh" onClick={handleUpdateUsers} size="large">
            <RefreshOutlinedIcon />
          </IconButton>
        }/>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: localStorage.getItem("userId"),
  users: state.users,
  trips: state.trips
});

export default connect(mapStateToProps, {
  get_all_users,
  updateUser,
  deleteUser,
  logout,
  getAllPublicTrips
})(Admin);
