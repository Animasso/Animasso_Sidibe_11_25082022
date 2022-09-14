import { useState, useRef } from "react";
import vectorDown from "../assets/vectorDown.png";
// import vectorUp from "../assets/vectorUp.png";

function Dropdown(props) {
  const [isActive, setActive] = useState(false);
  // const [rotation, setRotation] = useState("chevron");
  const content = useRef(null);
  const titleBox = useRef(null);

  // setRotation(setActive === "active" ? "chevron" : "chevronRotate");
  return (
    <div className="dropDown">
      <div className="dropDownChevron">
        <p className="dropDownTitle" ref={titleBox}>
          {props.titleBox}
        </p>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={vectorDown}
          alt=""
        />
      </div>

      {isActive && (
        <div className="boxTextDescription">
          <p className="text" ref={content}>
            {props.content}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
