import { useState, useRef } from "react";
import chevron from "../assets/downchevron.png";

function Dropdown(props) {
  // const { oneHouse } = props;
  const [isActive, setActive] = useState(false);
  const content = useRef(null);
  // const [setRotate, setRotateState] = useState("accordionlocation__icon");
  return (
    <div className="dropDowns">
      <div className="dropDown">
        <div className="dropDownChevron">
          <p className="dropDownTitle"> </p>
          <img
            className="chevron"
            onClick={() => setActive(!isActive)}
            src={chevron}
            alt=""
          />
        </div>
        <div className="dropDownBoxes">
          {isActive && (
            <div className="boxTextDescription" ref={content}>
              {props.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
