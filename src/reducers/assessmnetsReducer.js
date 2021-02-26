import { GET_ASSESSMENT } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_ASSESSMENT:
      return action.payload;
    default:
      return state;
  }
};
