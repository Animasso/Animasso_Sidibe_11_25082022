import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
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
    <div className="main">
      <Carrousel oneHouse={location} />
      <div className="front">
        <div className="locationTitlePosition">
          <div className="oneTitle">{location.title}</div>
          <div className="location">{location.location}</div>
        </div>
        <div className="host">
          <div className="name">{location.host.name}</div>
          <img src={location.host.picture} className="hostImage" alt="" />
        </div>
      </div>

      <div className="tags">
        {location.tags.map((tag) => (
          <TagsList content={tag} key={tag} />
        ))}
      </div>

      <div className="dropDowns">
        <Dropdown
          oneHouse={location}
          titleBox="Description"
          content={location.description}
        />
        <Dropdown
          oneHouse={location}
          titleBox="Equipements"
          content=<ul className="equipementList">
            {location.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        />
      </div>
    </div>
  );
}

export default HousingDetail;
