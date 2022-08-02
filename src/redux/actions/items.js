import { GET_ITEMS_FAIL, GET_ITEMS_SUCCESS } from "./types";
import axios from "axios";

export const getItemsByQuery = (query, page) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-IBM-Client-id": `${process.env.REACT_APP_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(
      `https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=${query}&page=${page}`,
      config
    );
    if (response.status === 200) {
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: GET_ITEMS_FAIL,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ITEMS_FAIL,
    });
  }
};
