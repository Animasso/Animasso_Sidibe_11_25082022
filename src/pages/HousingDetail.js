// import { useState } from "react";
import { useParams } from "react-router-dom";

function HousingDetail(props) {
  // const [oneLocation, setOneLocation] = useState([]);
  const { houses } = props;
  const params = useParams();
  console.log(params);

  const oneHouse = houses.find((house) => {
    return house.id === params.id;
  });
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
