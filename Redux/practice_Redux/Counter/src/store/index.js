import {createStore} from "redux";

const INITIAL_VALUE = {
  counter: 0,
  hidden: false
}

const counterReducer=(store = INITIAL_VALUE, action) =>{
  if (action.type === "INCREMENT"){
    return {...store, counter: store.counter+1};
  }else if (action.type === "DECREMENT"){
     return {...store, counter: store.counter-1};
  }else if (action.type === "ADD"){
     return {...store, counter: store.counter + Number(action.payload.num)}; //we wrap action.payload.num in Number as this function is identified as string as the number is not added but appended behind(try without Number Wrapping for more context) so we convert string to number by Number Wrapping
  }else if (action.type === "SUBTRACT"){
     return {...store, counter: store.counter - Number(action.payload.num)}; 
  }else if (action.type === "HIDE")
    return {...store, hidden: !store.hidden};
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;