import { LOGIN, LOGOUT } from "../services/auth";
import { UPDATE_USER, DELETE_USER } from "../services/user";
import { apiRequest } from "../services/api";
import { GET_ALL_USERS } from "../services/admin";

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
      case GET_ALL_USERS:{
        next(
          apiRequest({
            url: `${SERVER_URL}/parcours-sauvegarder`,
            method: "GET",
            type: GET_ALL_USERS
          })
        );
        break;
      }
      default:
        break;
    }
  };