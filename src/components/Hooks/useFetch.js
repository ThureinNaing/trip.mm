import { useEffect, useState } from "react";
function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  // fetch the json-data and handle the server by using useEffect hooks
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    fetch(url, { signal })
      .then((res) => {
        // for error
        if (!res.ok) {
          throw Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
    //clean up function
    return () => {
      abortController.abort();
    };
  }, [url]);
  return { data, loading, error };
}
export default useFetch;
