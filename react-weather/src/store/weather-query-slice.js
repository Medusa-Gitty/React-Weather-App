import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: {},
  units: "metric",
  weather: null,
};
const weatherQuerySlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherSave(state, payload) {
      state.weather = payload.payload;
    },
    query(state, payload) {
      state.queries = { q: payload.payload };
    },
    geoLocation(state, payload) {
      state.queries = payload.payload;
    },
  },
});

export default weatherQuerySlice;

export const weatherQueryActions = weatherQuerySlice.actions;
