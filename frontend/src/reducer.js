import { SET_LOADER } from "./services/ui";
import { API_SUCCESS, API_ERROR } from "./services/api";
import { LOGIN, LOGOUT, REGISTER } from "./services/auth";
import { UPDATE_USER, DELETE_USER } from "./services/user";
import { GET_ALL_USERS, PARCOURS_ADMIN } from "./services/admin";

export default (
  state = {
    isAuthUser: !!localStorage.getItem("isAuthUser"),
    isAdmin: localStorage.getItem("isAdmin"),
    accessToken: JSON.parse(localStorage.getItem("accessToken")) || {},
    refreshToken: JSON.parse(localStorage.getItem("refreshToken")) || {},
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      switch (action.meta) {
        case LOGIN:
          localStorage.setItem("isAuthUser", true);
          localStorage.setItem("accessToken",JSON.stringify(action.params.data.accessToken));
          localStorage.setItem("refreshToken",JSON.stringify(action.params.data.refreshToken));
          localStorage.setItem("isAdmin",JSON.stringify(action.params.data.user.IdRole === "admin"));
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
          const users = action.params.data
          return { ...state, users: users};
        case PARCOURS_ADMIN:
          const parcoursAdmin = action.params.data
          return { ...state, parcoursAdmin: parcoursAdmin};
        case REGISTER:
          return { ...state, statusRequest: action.params.data };
      }
    case API_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      localStorage.removeItem("accessToken");
      localStorage.removeItem("isAuthUser");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("refreshToken");
      return { ...state, isAuthUser: false, user: {} };

      default:
        return state;
  }
};