import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../services/api";
import { setLoader } from "../services/ui";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(setLoader(true));

    const { url, method, type } = action.meta;
    const { data } = action;

    axios({
      method,
      url,
      type,
      data
    })
      .then((response) => dispatch(apiSuccess({ response: data, params: response, meta: type })))
      .catch(error => {
        dispatch(apiError({ error: error.response }));
      });

  }
};