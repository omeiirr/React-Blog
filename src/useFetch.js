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
    setTimeout(() => {
      // setTimeout of 1 second to simulate the loading tag
      console.log("useEffect ran");
      console.log(data);

      // Cannot use async await here, so we will use .then
      fetch(url)
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
          setError(err.message);
          setIsPending(false);
        });
    }, 100);

    return () => console.log("cleanup");
  }, [url]);

  return { data, isPending, error };
  // Our custom hook returns an object with these 3 values
  // We could also have returned an array, but an
  // object does not depend on order of items like array
};

export default useFetch;
