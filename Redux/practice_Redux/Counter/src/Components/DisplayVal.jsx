import { useSelector } from "react-redux";

export const DisplayVal = () => {
  const counter = useSelector(store => store.counter); //subscription work done by selector

  return <p className="lead mb-4">Counter current value : {counter} </p>;
};
