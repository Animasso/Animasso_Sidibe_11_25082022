// import useFetch from "./hooks/useFetch";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Gallery(props) {
  const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((listHouse) => setData(listHouse));
  }, []);
  console.log(data);
  let navigate = useNavigate();

  return (
    <div className="gallery">
      {data.map((annonce) => (
        <div
          className="imgCover"
          key={annonce.id}
          onClick={() => {
            navigate(`/HousingDetail/${annonce.id}`);
          }}
        >
          <img src={annonce.cover} alt="" />
          <div className="title" key={annonce.id}>
            {annonce.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
