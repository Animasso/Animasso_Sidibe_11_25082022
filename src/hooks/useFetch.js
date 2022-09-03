import { useEffect, useState } from "react";

function useFetch(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}

export default useFetch;
