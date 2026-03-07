import {createSlice} from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, //false: fetching not done, true: fetching done
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) =>{  
      // return state.fetchDone = true;
      state.fetchDone = true; //problem
    },
    markFetchingStarted: (state) =>{  
       state.currentlyFetching = true;//problem
    },
    markFetchingFinished: (state) =>{  
       state.currentlyFetching = false; //problem
    }
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;