import { createSlice } from "@reduxjs/toolkit";

const hiddenSlice = createSlice({
  name: 'hidden',
  initialState: false,
  reducers:{
    toggle: (state) =>{
    return  state = !state; //not an expression so we have to return this;
    }
  }
})


export const hiddenActions = hiddenSlice.actions;
export default hiddenSlice;