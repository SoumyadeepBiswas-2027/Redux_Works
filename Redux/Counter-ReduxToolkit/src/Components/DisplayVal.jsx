import { useSelector } from "react-redux";

export const DisplayVal = () => {
  const {counterVal}= useSelector((store) => store.counter); //to access from store we use store.slice (here slice=counter)
  return <p className="lead mb-4">Counter current value : {counterVal} </p>;
};
export default DisplayVal;