import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Stars from "../components/Stars";
import TagsList from "../components/tagsList";

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
    <>
      <div className="main">
        <Carrousel oneHouse={location} />
        <div className="front">
          <div className="locationTitlePosition">
            <div className="oneTitle">{location.title}</div>
            <div className="location">{location.location}</div>
            <div className="tags">
              {location.tags.map((tag) => (
                <TagsList content={tag} key={tag} />
              ))}
            </div>
          </div>

          <div className="tagsEtoile">
            <div className="host">
              <div className="name">{location.host.name}</div>
              <img src={location.host.picture} className="hostImage" alt="" />
            </div>
            <Stars oneHouse={location} />
          </div>
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
            content=<div className="equipementList">
              {location.equipments.map((equipment) => (
                <div key={equipment}>{equipment}</div>
              ))}
            </div>
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HousingDetail;
