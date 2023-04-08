import LRU from 'lru-cache';

const cache = new LRU({ max: 10000 });

// action types
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";
export const CANCEL_API_REQUEST = "CANCEL_API_REQUEST";

// action creators
export const apiRequest = ({ url, method, data, type }) => {
  return {
    type: API_REQUEST,
    meta: { url, method, type },
    data: data,
  };
};

export const cancelApiRequest = () => {
  return {
    type: CANCEL_API_REQUEST,
  };
};

export const apiSuccess = ({ response, meta, params }) => {

  if (meta === 'GET_ALL_PUBLIC_TRIPS') {
    cache.set('publicTrips', response);
  }

  return {
    type: API_SUCCESS,
    meta: meta,
    params: params,
    payload: response
  };
};

export const apiError = ({ error }) => ({
  type: API_ERROR,
  payload: error
});