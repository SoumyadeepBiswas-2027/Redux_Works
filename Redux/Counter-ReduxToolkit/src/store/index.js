import {configureStore , createSlice} from '@reduxjs/toolkit';
import counterSlice from './Counter';
import hiddenSlice from './hiddenToggle';

const counterStore = configureStore({reducer:{
counter: counterSlice.reducer,
hidden: hiddenSlice.reducer
}});

export default counterStore;

// const INITIAL_VALUE = {
//   counter: 0,
//   hidden: false
// }

// const counterReducer=(store = INITIAL_VALUE, action) =>{
//   if (action.type === "INCREMENT"){
//     return {...store, counter: store.counter+1};
//   }else if (action.type === "DECREMENT"){
//      return {...store, counter: store.counter-1};
//   }else if (action.type === "ADD"){
//      return {...store, counter: store.counter + Number(action.payload.num)}; 
//   }else if (action.type === "SUBTRACT"){
//      return {...store, counter: store.counter - Number(action.payload.num)}; 
//   }else if (action.type === "HIDE")
//     return {...store, hidden: !store.hidden};
//   return store;
// }