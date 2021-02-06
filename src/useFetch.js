import { useState, useEffect } from "react";

// This is a custom hook that fetches data from server
// NOTE: It is compulsory for a hook to start with 'use'

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs every time there is  a re-render,
  // first, when the DOM loads, then everytime the data changes.

  // But sometimes, we don't want it to run on EVERY render
  // So, we pass a dependency array to useEffect as an argument

  // If we pass an empty dependency array, useEffect only runs  on the first render
  // and not anymore if we make any changes to the data.

  // Add to the dependency array any values that when changed,
  // will trigger useEffect

  useEffect(() => {
    const abortController = new AbortController();
    // We need to associate this with a fetch request
    // Then we can use the abortController to stop the fetch
    // we will pass this as an argument to the fetch request as shown below.

    setTimeout(() => {
      // setTimeout of 1 second to simulate the loading tag
      // console.log("useEffect ran");
      // console.log(data);

      // Cannot use async await here, so we will use .then
      fetch(url, { signal: abortController.signal })
        // res is an object returned by the server with properties like
        // 'ok : true', 'status: 200' etc.

        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data for that resource");
          }
          console.log(res);
          return res.json();
        })

        .then((data) => {
          setData(data);
          console.log(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // PSYCH: When a fetch is cancelled, it throws an error
          // Here, when we catch an error, we are updating the state after catch
          // Not necassarily the data, but yes, the state is being updated which still throws the
          // warning at line 66

          // SOLUTION: If the error is caused by aborted fetch request, do not update state
          // However, if it's a network error or something else, tell the user
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 100);

    // When we had timeOut limit of 1000ms, and switched
    // quickly from '/create' to '/home', we received a warning
    // "Can't perform React state update on an unmounted component"

    // This is because it tries to update the content of the
    // home component, BUT, the home component is not in the DOM anymore

    // So, when we click on 'New Blog', we need to cancel the fetch for
    // the 'home' component.

    // We'll be using a cleanup function in useEffect hook, and an abort controller

    return () => {
      abortController.abort();
      // This aborts whatever fetch it's associated with i.e., at line 35

      // console.log("cleanup");
    };
  }, [url]);

  return { data, isPending, error };
  // Our custom hook returns an object with these 3 values
  // We could also have returned an array, but an
  // object does not depend on order of items like array
};

export default useFetch;
