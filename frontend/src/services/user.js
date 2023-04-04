export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const updateUser = (id, userData) => {
    return {
      type: UPDATE_USER,
      payload: {
        id: id,
        userData: userData,
      },
    };
  };

export const deleteUser = (id) => {
    return {
      type: DELETE_USER,
      payload: {
        id: id,
      },
    };
  };