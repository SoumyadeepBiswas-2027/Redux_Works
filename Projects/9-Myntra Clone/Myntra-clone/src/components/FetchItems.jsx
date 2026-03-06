import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();


    useEffect(() =>{
      if(fetchStatus.fetchDone) return;

    //setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items",{signal})
      .then((res) => res.json())
      .then(({items}) => {   //problem
        dispatch(itemsActions.addInitialItems(items[0]));
        
        // addInitialPosts(data.posts);
        //  setFetching(false);
      });

      return () => {
        //console.log("cleaning up UseEffect");
        controller.abort();
      }
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};
export default FetchItems;