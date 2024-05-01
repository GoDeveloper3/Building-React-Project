import { createSlice } from "@reduxjs/toolkit";



const propertySlice = createSlice({
  //slice name
  name: "property",
  initialState :{
    properties: [],
    totalProperties: 0,
    searchPramas:{},
    error: null,
    loading: false,
  },
  //reducers fn to handle different function
  reducers:{
      getRequest(state){
        state.loading = true;
      },
      getProperties(state, action){
        state.properties = action.payload.data;
        state.totalProperties = action.payload.all_properties;
        state.loading = false;
      },
      //action to update search parameter

      updateSearchParams:(state,action)=>{
        state.searchPramas = Object.keys(action.payload).length === 0 ? {} : {
          ...state.searchPramas,
          ...action.payload
        };
      },

      getErrors(state, action){
        state.error = action.payload;
        
      },

  }
});

export const propertyAction = propertySlice.actions;

export default propertySlice;

