export const CREATE_LIKES = "CREATE_LIKES";
export const GET_ALL_LIKES = "GET_ALL_LIKES";
export const GET_LIKES_BY_USERID = "GET_LIKES_BY_USERID";
export const GET_LIKES_BY_ID = "GET_LIKES_BY_ID";
export const UPDATE_LIKES = "UPDATE_LIKES";
export const DELETE_LIKES = "DELETE_LIKES";

export const createLikes = (id, userData) => {
  return {
    type: CREATE_LIKES,
    payload: {
      id: id,
      userData: userData,
    },
  };
};

export const getAllLikes = () => {
  return {
    type: GET_ALL_LIKES,
  };
};

export const getLikesByUserId = (userId) => {
  return {
    type: GET_LIKES_BY_USERID,
    payload: {
      id: userId,
    },
  };
};

export const getLikesById = (Id) => {
  return {
    type: GET_LIKES_BY_ID,
    payload: {
      id: Id,
    },
  };
};

export const updateLikes = (id, userData) => {
  return {
    type: UPDATE_LIKES,
    payload: {
      id: id,
      userData: userData,
    },
  };
};

export const deleteLikes = (id) => {
  return {
    type: DELETE_LIKES,
    payload: {
      id: id,
    },
  };
};
