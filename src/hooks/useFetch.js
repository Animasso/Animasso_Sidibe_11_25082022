import { useEffect, useState } from "react";

function useFetch(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "/data.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}

export default useFetch;
