import { useRef, useState } from "react";
import chevron from "../assets/downchevron.png";

function AboutDropdown(props) {
  const [isActive, setActive] = useState(false);
  const content = useRef(null);
  const titleBox = useRef(null);
  return (
    <div className="aboutDropDown">
      <div className="aboutDropDownChevron">
        <p className="aboutDroptitle" ref={titleBox}>
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
        <div className="aboutBoxTextDescription">
          <p className="text" ref={content}>
            {props.content}
          </p>
        </div>
      )}
    </div>
  );
}

export default AboutDropdown;
