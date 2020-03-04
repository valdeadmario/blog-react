import { SET_AUTH_STATUS } from "./actions";

const initialState = { isAuthorized: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return { ...state, isAuthorized: action.payload };

    default:
      return state;
  }
};
