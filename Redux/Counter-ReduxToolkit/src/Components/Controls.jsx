import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Counter";
import { hiddenActions } from "../store/hiddenToggle";
//import { counterActions, hiddenActions } from "../store";

export const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
     dispatch(counterActions.decrement()); 
  };

   const handleHide = () => {
    dispatch(hiddenActions.toggle());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value,));

    inputElement.current.value = "";
  };

   const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value,));
    inputElement.current.value = "";
  };


  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-link"
          onClick={handleHide}
        >
          Hide
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
