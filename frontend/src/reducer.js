import { SET_LOADER } from "./services/ui";
import { API_SUCCESS, API_ERROR } from "./services/api";
import { LOGIN, LOGOUT, REGISTER } from "./services/auth";
import { UPDATE_USER, DELETE_USER } from "./services/user";
import { GET_ALL_USERS, PARCOURS_ADMIN } from "./services/admin";
import { CREATE_MY_TRIP, DELETE_MY_TRIP, GET_TRIP_BY_ID, GET_TRIP_BY_USER_ID,  UPDATE_MY_TRIP, GET_ALL_PUBLIC_TRIPS} from "./services/trips";
import { CREATE_LIKES, GET_ALL_LIKES, GET_LIKES_BY_USERID, GET_LIKES_BY_ID, UPDATE_LIKES, DELETE_LIKES, GET_USER_LIKED_TRIP } from "./services/likes";

export default (
  state = {
    isAuthUser: !!localStorage.getItem("isAuthUser"),
    isAdmin: localStorage.getItem("isAdmin"),
    accessToken: JSON.parse(localStorage.getItem("accessToken")) || {},
    refreshToken: JSON.parse(localStorage.getItem("refreshToken")) || {},
    isLoading: false,
    error: null,
    userId: localStorage.getItem("userId") || null,
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      switch (action.meta) {
        case LOGIN:
          localStorage.setItem("isAuthUser", true);
          localStorage.setItem("userId", action.params.data.user.Id);
          localStorage.setItem(
            "accessToken",
            JSON.stringify(action.params.data.accessToken)
          );
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(action.params.data.refreshToken)
          );
          localStorage.setItem(
            "isAdmin",
            JSON.stringify(action.params.data.user.IdRole === "admin")
          );
          return { ...state, isAuthUser: true, user: action.params.data.user };
        case UPDATE_USER:
          const updatedUser = action.payload.user;
          return {
            ...state,
            user: { ...state.user, ...updatedUser },
          };
        case DELETE_USER:
          const deleteUser = action.payload.user;
          return {
            ...state,
            user: { ...state.user, ...deleteUser },
          };
        case GET_ALL_USERS:
          const users = action.params.data;
          return { ...state, users: users };
        case PARCOURS_ADMIN:
          const parcoursAdmin = action.params.data;
          return { ...state, parcoursAdmin: parcoursAdmin };
        case REGISTER:
          return { ...state, statusRequest: action.params.data };

        case CREATE_MY_TRIP:
          return { ...state, trips: action.params.data };
        case GET_TRIP_BY_ID:
          return { ...state, trips: action.params.data };
        case GET_TRIP_BY_USER_ID:
          return { ...state, trips: action.params.data };
        case UPDATE_MY_TRIP:
          return { ...state, trips: action.params.data };
        case DELETE_MY_TRIP:
          return { ...state, trips: action.params.data };
        case GET_ALL_PUBLIC_TRIPS:
          return { ...state, tripsLiked: action.params.data };

        case CREATE_LIKES:
          return { ...state, likes: action.params.data };
        case GET_ALL_LIKES:
          return { ...state, likes: action.params.data };
        case GET_LIKES_BY_ID:
            return { ...state, likes: action.params.data };
        case GET_LIKES_BY_USERID:
            return { ...state, likes: action.params.data };
        case GET_USER_LIKED_TRIP:
          return { ...state, likedTrip:  {...action.params.data}.liked };
        case UPDATE_LIKES:
          return { ...state, likes: action.params.data };
        case DELETE_LIKES:
          return { ...state, likes: action.params.data };
        }
    case API_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAuthUser");
      localStorage.removeItem("userId");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("refreshToken");
      return { ...state, isAuthUser: false, user: {} };

    default:
      return state;
  }
};
