import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Gallery(props) {
  const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
  const houses = useFetch(url);
  console.log(houses);

  let navigate = useNavigate();

  return (
    <div className="gallery">
      {houses.map((annonce) => (
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
