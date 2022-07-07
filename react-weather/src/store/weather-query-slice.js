import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  q: "berlin",
  unit: "metric",
  weather: null,
};
const weatherQuerySlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    save(state, payload) {
      state.weather = payload.payload;
      console.log(payload);
    },
  },
});

export default weatherQuerySlice;

export const weatherQueryActions = weatherQuerySlice.actions;
