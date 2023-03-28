import { LOGIN, LOGOUT, logout } from "../services/auth";
import { apiRequest } from "../services/api";

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
          })
        );
        break;
      }
      case LOGOUT: {
        next(
          apiRequest({
            url: `${SERVER_URL}/auth/LOGOUT`,
            method: "DELETE",
          })
        );
        break;
      }
      default:
        break;
    }
  };