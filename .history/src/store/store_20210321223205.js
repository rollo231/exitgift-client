import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import userReducer from "../reducers/userSlice";
import slideContentSliceReducer from "../reducers/slideContentSlice";
require("dotenv").config();
// reducer 목록
const reducer = {
  counter: counterReducer,
  userReducer,
  SlideContents: lideContentSliceReducer,
};

// 추가 middleware 목록
const middleware = [...getDefaultMiddleware()];

// 초기 state 목록
const preloadedState = {};

export default configureStore({
  reducer,
  middleware,
  devTools: true,
  preloadedState,
});
