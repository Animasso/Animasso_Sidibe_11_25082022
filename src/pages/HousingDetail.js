import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HousingDetail(props) {
  const [locations, setLocations] = useState([]);
  const [oneLocation, setOneLocation] = useState([]);
  const params = useParams();
  useEffect(() => {
    const url =
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocations(data));

    // .then((listHouse) => setLocations(listHouse));
    console.log(params);
  }, [params]);
  const house = locations.find((location) => location.id === params);
  setOneLocation(house);

  return (
    <div>
      <div className="carrousel"></div>
      <div className="singleLocation">
        <div className="first">
          <div className="locationTitlePosition">
            <p className="title"></p>
            <p className="location"></p>
            <p className="tags"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HousingDetail;
