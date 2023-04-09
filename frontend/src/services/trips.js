export const GET_MY_TRIP = "GET_MY_TRIP";
export const GET_ALL_TRIP = "GET_ALL_TRIP";
export const CREATE_MY_TRIP = "CREATE_MY_TRIP";
export const UPDATE_MY_TRIP = "UPDATE_MY_TRIP";
export const DELETE_MY_TRIP = "DELETE_MY_TRIP";
export const GET_TRIP_BY_USER_ID = "GET_TRIP_BY_USER_ID";
export const GET_TRIP_BY_ID = "GET_TRIP_BY_ID";
export const GET_ALL_PUBLIC_TRIPS = "GET_ALL_PUBLIC_TRIPS";

export const getAllTrip = () => {
  return {
    type: GET_ALL_TRIP,
  };
};

export const createMyTrip = (userData) => {
  return {
    type: CREATE_MY_TRIP,
    payload: {
      userData: userData,
    },
  };
};

export const getTripByUserId = (id) => {
  return {
    type: GET_TRIP_BY_USER_ID,
    payload: {
      id: id,
    },
  };
};

export const getTripById = (id) => {
  return {
    type: GET_TRIP_BY_ID,
    payload: {
      id: id,
    },
  };
};

export const getAllPublicTrips = (userId) => {
  return {
    type: GET_ALL_PUBLIC_TRIPS,
    payload: {
      userId: userId
    }
  }
};

export const updateMyTrip = (id, userData) => {
  return {
    type: UPDATE_MY_TRIP,
    payload: {
      id: id,
      userData: userData,
    },
  };
};

export const deleteMyTrip = (id) => {
  return {
    type: DELETE_MY_TRIP,
    payload: {
      id: id,
    },
  };
};
