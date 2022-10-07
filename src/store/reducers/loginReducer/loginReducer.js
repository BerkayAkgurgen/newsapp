import { LOGIN_INFO_UPDATE } from "../../actionsName";

const INITIAL_STATE = {
  login: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INFO_UPDATE:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
