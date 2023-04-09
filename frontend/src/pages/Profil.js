import React, { useState, useEffect } from "react";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

import { connect } from "react-redux";
import { updateUser, deleteUser } from "../services/user";
import { logout } from "../services/auth";
import { deleteMyTrip, updateMyTrip, getTripByUserId } from "../services/trips";
import { getLikesByUserId, deleteLikes } from "../services/likes";

import Reglages from "../components/Reglages";
import TripCardUser from "../components/Cards/TripCardUser";

const ItnFct = ({ trips, likedTrips, updateMyTrip, deleteMyTrip, children, deleteLikes }) => {

  return (
    <div>
      <h1>Mes itinéraires</h1>
      <h3>
        Dans cette section, vous pouvez supprimer, imprimer ou publier les
        itinéraires {children}
      </h3>
      <div className="CardsUsersViews">
        {trips && trips.length > 0 ? (
          trips.map((trip) => (
            <TripCardUser
              isItMine={true}
              key={trip.Id}
              tripId={trip.Id}
              adresse={trip.Adresse}
              Drink={trip.Drink}
              Travel={trip.Travel}
              Eat={trip.Eat}
              Sleep={trip.Sleep}
              Enjoy={trip.Enjoy}
              Published={trip.Published}
              LikesNumbers={String(trip.LikesNumbers)}
              updateMyTrip={updateMyTrip}
              deleteMyTrip={deleteMyTrip}
            />
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>

      <h3>Voici les publications que vous avez aimer :</h3>
      <div className="CardsUsersViews">
        { likedTrips ? (
        likedTrips.length > 0 ? (
            likedTrips.map((liked) => (
              <TripCardUser
                isItMine={false}
                key={liked.Id}
                idLike={liked.Id}
                adresse={liked.trip.Adresse}
                Drink={liked.trip.Drink}
                Eat={liked.trip.Eat}
                Travel={liked.trip.Travel}
                Sleep={liked.trip.Sleep}
                Enjoy={liked.trip.Enjoy}
                LikesNumbers={String(liked.trip.LikesNumbers)}
                deleteLike={deleteLikes}
              />
            ))
          ) : (
            <div>Loading...</div>
          )) : (
            <div>Aucun résultat</div>
          )
        }
      </div>
    </div>
  );
};

const Profil = ({
  userId,
  updateUser,
  deleteUser,
  logout,
  trips,
  likedTrips,
  deleteMyTrip,
  updateMyTrip,
  getLikesByUserId,
  getTripByUserId,
  deleteLikes,
}) => {
  const [itnOpen, setItnOpen] = useState(true);
  const [regOpen, setRegOpen] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const handleItnClick = () => {
    setItnOpen(true);
    setRegOpen(false);
  };

  const handleRegClick = () => {
    setItnOpen(false);
    setRegOpen(true);
  };

  const handleUpdateUsers = () => {
    setUpdateTrigger(!updateTrigger);
  };

  useEffect(() => {
    getTripByUserId(userId);
    getLikesByUserId(userId)
  }, [getTripByUserId, getLikesByUserId, updateTrigger]);

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
      {itnOpen && (
        <ItnFct
          ID={userId}
          trips={trips}
          updateMyTrip={updateMyTrip}
          deleteMyTrip={deleteMyTrip}
          likedTrips={likedTrips}
          deleteLikes={deleteLikes}
          children={
            <IconButton
              aria-label="refresh"
              onClick={handleUpdateUsers}
              size="large"
            >
              <RefreshOutlinedIcon />
            </IconButton>
          }
        />
      )}
      {regOpen && (
        <Reglages
          ID={userId}
          updateUser={updateUser}
          deleteUser={deleteUser}
          logout={logout}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: localStorage.getItem("userId"),
  trips: state.trips,
  likedTrips: state?.likes?.likes
});

export default connect(mapStateToProps, {
  updateUser,
  deleteUser,
  logout,
  deleteMyTrip,
  updateMyTrip,
  getLikesByUserId,
  getTripByUserId,
  deleteLikes,
})(Profil);
