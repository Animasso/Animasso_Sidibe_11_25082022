import { useState } from "react";
import chevron from "../assets/downchevron.png";

function Dropdown(props) {
  const [isActive, setActive] = useState(false);
  return (
    <div className="equipementBox">
      <div className="equipementChevron">
        <p className="equipements"> equipements</p>
        <img
          className="chevron"
          onClick={() => setActive(!isActive)}
          src={chevron}
          alt=""
        />
      </div>
      {isActive && <div className="boxText"></div>}
    </div>
  );
}

export default Dropdown;
