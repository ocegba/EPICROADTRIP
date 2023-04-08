import { LOGIN, LOGOUT, REGISTER } from "../services/auth";
import { UPDATE_USER, DELETE_USER } from "../services/user";
import { apiRequest } from "../services/api";
import { GET_ALL_USERS, PARCOURS_ADMIN } from "../services/admin";
import { CREATE_MY_TRIP, DELETE_MY_TRIP, GET_TRIP_BY_USER_ID, GET_TRIP_BY_ID, UPDATE_MY_TRIP, GET_ALL_PUBLIC_TRIPS } from "../services/trips";
import { CREATE_LIKES, DELETE_LIKES, GET_ALL_LIKES, GET_LIKES_BY_ID, GET_LIKES_BY_USERID, GET_USER_LIKED_TRIP, UPDATE_LIKES } from "../services/likes";

const SERVER_URL = `http://localhost:3000`;

export const appMiddleware = () => next => action => {
    next(action);
    switch (action.type) {
      case LOGIN: {
        next(
          apiRequest({
            url: `${SERVER_URL}/auth/login`,
            method: "POST",
            data: action.payload,
            type: LOGIN
          })
        );
        break;
      }
      case LOGOUT: {
        next(
          apiRequest({
            url: `${SERVER_URL}/auth/logout`,
            method: "DELETE",
          })
        );
        break;
      }
      case UPDATE_USER: {
        next(
          apiRequest({
            url: `${SERVER_URL}/users/${action.payload.id}`,
            method: "PUT",
            data: action.payload.userData,
            type: UPDATE_USER
          })
        );
        break;
      }
      case DELETE_USER: {
        next(
          apiRequest({
            url: `${SERVER_URL}/users/${action.payload.id}`,
            method: "DELETE",
            type: DELETE_USER
          })
        );
        break;
      }
      case GET_ALL_USERS:{
        next(
          apiRequest({
            url: `${SERVER_URL}/users`,
            method: "GET",
            type: GET_ALL_USERS
          })
        );
        break;
      }
      case PARCOURS_ADMIN:{
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder`,
            method: "GET",
            type: PARCOURS_ADMIN
          })
        );
        break;
      }
      case REGISTER: {
        next(
          apiRequest({
            url: `${SERVER_URL}/users`,
            method: "POST",
            data: action.payload,
            type: REGISTER
          })
        );
        break;
      }

      case CREATE_MY_TRIP: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder`,
            method: "POST",
            data: action.payload,
            type: CREATE_MY_TRIP
          })
        );
        break;
      }
      case GET_TRIP_BY_USER_ID: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder/user/${action.payload.id}`,
            method: "GET",
            type: GET_TRIP_BY_USER_ID
          })
        );
        break;
      }
      case GET_TRIP_BY_ID: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder/${action.payload.id}`,
            method: "GET",
            type: GET_TRIP_BY_ID
          })
        );
        break;
      }
      case GET_ALL_PUBLIC_TRIPS: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder/trips?userId=${action.payload.userId}`,
            method: "GET",
            type: GET_ALL_PUBLIC_TRIPS
          })
        );
        break;
      }
      case UPDATE_MY_TRIP: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder/${action.payload.id}`,
            method: "PUT",
            data: action.payload.userData,
            type: UPDATE_MY_TRIP
          })
        );
        break;
      }
      case DELETE_MY_TRIP: {
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder/${action.payload.id}`,
            method: "DELETE",
            type: DELETE_MY_TRIP
          })
        );
        break;
      }

      case CREATE_LIKES: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes`,
            method: "POST",
            data: action.payload,
            type: CREATE_LIKES
          })
        );
        break;
      }
      case GET_ALL_LIKES: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes`,
            method: "GET",
            type: GET_ALL_LIKES
          })
        );
        break;
      }
      case GET_LIKES_BY_ID: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes/${action.payload.id}`,
            method: "GET",
            type: GET_LIKES_BY_ID
          })
        );
        break;
      }
      case GET_LIKES_BY_USERID: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes/user/${action.payload.id}`,
            method: "GET",
            type: GET_LIKES_BY_USERID
          })
        );
        break;
      }
      case GET_USER_LIKED_TRIP:{
        next(
          apiRequest({
            url: `${SERVER_URL}/likes/${action.payload.userId}/${action.payload.tripId}/liked`,
            method: "GET",
            type: GET_USER_LIKED_TRIP
          })
        );
        break;
      }
      case UPDATE_LIKES: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes/trip/${action.payload.tripId}/user/${action.payload.userId}`,
            method: "PUT",
            data: action.payload.userData,
            type: UPDATE_LIKES
          })
        );
        break;
      }
      case DELETE_LIKES: {
        next(
          apiRequest({
            url: `${SERVER_URL}/likes/${action.payload.id}`,
            method: "DELETE",
            type: DELETE_LIKES
          })
        );
        break;
      }
      default:
        break;
    }
  };