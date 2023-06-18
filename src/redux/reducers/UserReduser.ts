import {  createReducer, PayloadAction } from "@reduxjs/toolkit";
import { USER_DETAILS } from "../actions/ReducerActions";


const initialState = {
  user:null,
  access_token:null
};



const UserReducer = createReducer(
  initialState,
  (builder) => {
     builder.addCase(USER_DETAILS, (state, action:PayloadAction<any>) => ({
      ...state,
      user: action.payload,
    }));
     
    
  }
)
export default UserReducer;
