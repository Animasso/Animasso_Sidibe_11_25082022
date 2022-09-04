import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import TagsList from "../components/TagsList";

function HousingDetail(props) {
  const { houses } = props;
  const params = useParams();

  console.log(params);
  const [location, setLocation] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });
  useEffect(() => {
    const oneHouse = houses.find((house) => house.id === params.id);
    setLocation(oneHouse);
  }, [houses, location, params.id]);

  return (
    <div>
      <div className="carrousel"></div>
      <div className="singleLocation">
        <div className="first">
          <div className="locationTitlePosition">
            <p className="Onetitle">{location.title}</p>
            <p className="location">{location.location}</p>
            <TagsList oneHouse={location} />
          </div>
        </div>
      </div>
      <Dropdown oneHouse={location} content={location.description} />
    </div>
  );
}

export default HousingDetail;
