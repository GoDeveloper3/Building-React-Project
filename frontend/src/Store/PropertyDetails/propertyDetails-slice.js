import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState: {
    propertydetails: [],
    loading: false,
    error: null,
  },
  reducers: {
    getListRequest(state) {
      state.loading = true;
    },
    getPropertyDetails(state, action) {
      state.propertydetails = action.payload;
      state.loading = false;
    },
    getErrors(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export  const propertyDetailsAction = propertyDetailsSlice.actions;

export default propertyDetailsSlice;