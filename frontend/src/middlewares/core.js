import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../services/api";
import { setLoader } from "../services/ui";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === API_REQUEST) {
    dispatch(setLoader(true));
    const { url, method } = action.meta;
    const { data } = action;

    axios({
      method,
      url,
      data
    })
      .then(( ) => dispatch(apiSuccess({ response: data })))
      .catch(error => {
        console.log(error);
        dispatch(apiError({ error: error.response.data }));
      });

  }
};