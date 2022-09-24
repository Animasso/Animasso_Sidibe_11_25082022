import { useState } from "react";
import vectorDown from "../assets/vectorDown.png";
import vectorUp from "../assets/vectorUp.png";

function Dropdown(props) {
  const [isActive, setActive] = useState(false);
  // const [rotation, setRotation] = useState("chevron");

  return (
    <div className="dropDown">
      <div className="dropDownChevron">
        <p className="dropDownTitle">{props.titleBox}</p>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={isActive ? vectorUp : vectorDown}
          alt=""
        />
      </div>

      {isActive && (
        <div className="boxTextDescription">
          <div className="text">{props.content}</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
