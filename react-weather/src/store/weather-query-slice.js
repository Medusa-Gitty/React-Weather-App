import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  q: "chittaranjan",
  units: "metric",
  weather: null,
  lat: null,
  lon: null,
};
const weatherQuerySlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    save(state, payload) {
      state.weather = payload.payload;
    },
    query(state, payload) {
      state.q = payload.payload;
    },
  },
});

export default weatherQuerySlice;

export const weatherQueryActions = weatherQuerySlice.actions;
