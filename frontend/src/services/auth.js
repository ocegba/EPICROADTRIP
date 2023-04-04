export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const login = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const register = (user) => {
  return {
    type: REGISTER,
    payload: user
  }
}