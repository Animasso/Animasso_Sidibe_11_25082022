import { useState, useRef } from "react";
import chevron from "../assets/downchevron.png";

function Dropdown(props) {
  const [isActive, setActive] = useState(false);
  const content = useRef(null);
  const titleBox = useRef(null);

  return (
    <div className="dropDown">
      <div className="dropDownChevron">
        <p className="dropDownTitle" ref={titleBox}>
          {props.titleBox}
        </p>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={chevron}
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
