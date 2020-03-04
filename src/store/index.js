import { createStore, applyMiddleware, combineReducers } from "redux";

import authReducer from "../components/Login/reducer";
import newsReducer from "../components/News/reducer";

const initialState = {};

const middlewares = [];

const composedEnhancers = applyMiddleware(...middlewares);

const reducers = {
  auth: authReducer,
  news: newsReducer
};

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
