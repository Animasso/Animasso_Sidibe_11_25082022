//import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Gallery(props) {
  const { houses } = props;
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
