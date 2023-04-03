export const GET_ALL_USERS = "GET_ALL_USERS";
export const PARCOURS_ADMIN = "PARCOURS_ADMIN";

export const get_all_users = () => {
    return {
      type: GET_ALL_USERS,
    };
  };

export const parcoursAdmin = () => {
      return {
        type: PARCOURS_ADMIN,
      };
    };