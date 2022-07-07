import { configureStore } from "@reduxjs/toolkit";
import weatherQuerySlice from "./weather-query-slice";

const store = configureStore({
  reducer: {
    weather: weatherQuerySlice.reducer,
  },
});

export default store;
