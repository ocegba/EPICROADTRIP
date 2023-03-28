import { SET_LOADER, } from "./services/ui";
import { API_SUCCESS, API_ERROR } from "./services/api";
import { LOGOUT } from "./services/auth";

export default (
  state = {
    isAuthUser: !!localStorage.getItem("accessToken"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    accessToken: JSON.parse(localStorage.getItem("accessToken")) || {},
    refreshToken: JSON.parse(localStorage.getItem("refreshToken")) || {},
    isLoading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", JSON.stringify(action.params.data.accessToken));
      localStorage.setItem("refreshToken", JSON.stringify(action.params.data.refreshToken));
      return { ...state, isAuthUser: true, user: action.params.data.user};
    case API_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return { ...state, isAuthUser: false, user: {} };
    default:
      return state;
  }
};