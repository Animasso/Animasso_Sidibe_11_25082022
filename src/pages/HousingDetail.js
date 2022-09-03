// import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function HousingDetail(props) {
  // const [oneLocation, setOneLocation] = useState([]);
  const params = useParams();
  console.log(params);
  const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
  const allHouses = useFetch(url);
  console.log(allHouses);

  const oneHouse = allHouses.find((house) => house.id === params);
  // const oneHouse = houses.find((house) => {
  //   return house.id === params.id;
  // });
  console.log(oneHouse);
  // setOneLocation(house);

  return (
    <div>
      <div className="carrousel"></div>
      <div className="singleLocation">
        <div className="first">
          <div className="locationTitlePosition">
            <p className="Onetitle">{oneHouse.title}</p>
            <p className="location">{oneHouse.location}</p>
            <p className="tags"> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HousingDetail;
