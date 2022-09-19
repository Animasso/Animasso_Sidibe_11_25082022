import { useState } from "react";
import vectorDown from "../assets/vectorDown.png";
import vectorUp from "../assets/vectorUp.png";

function AboutDropdown(props) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="aboutDropDown">
      <div className="aboutDropDownChevron">
        <div className="aboutDroptitle">{props.titleBox}</div>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={isActive ? vectorUp : vectorDown}
          alt=""
        />
      </div>

      {isActive && (
        <div className="aboutBoxTextDescription">
          <p className="textAbout">{props.content}</p>
        </div>
      )}
    </div>
  );
}

export default AboutDropdown;
