import { useState } from "react";
import chevron from "../assets/downchevron.png";

function Dropdown(props) {
  const { oneHouse } = props;
  const [isActive, setActive] = useState(false);
  // const [setRotate, setRotateState] = useState("accordionlocation__icon");
  return (
    <div className="dropDownBox">
      <div className="dropDownChevron">
        <p className="dropDownTitle"> </p>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={chevron}
          alt=""
        />
      </div>
      {isActive && <div className="boxText">{oneHouse.description}</div>}
    </div>
  );
}

export default Dropdown;
