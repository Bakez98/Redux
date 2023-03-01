import { createStore } from "redux";

// combine store
import { combineReducers } from "redux";

const initialState = {
  count: 0,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Allreducers = combineReducers({
  myReducer,
});
const store = createStore(Allreducers);

export default store;

//state management library
