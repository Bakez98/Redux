import { createStore } from "redux";

// combine store
import { combineReducers } from "redux";

const initialState = {
  users: [],
  loading : false,
  error: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state,loading: true };
    case "FETCH_ERROR":
      return { ...state,loading:false, error: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    default:
      return state;
  }
};

const Allreducers = combineReducers({
  UserReducer,
});
const store = createStore(Allreducers);

export default store;

//state management library
