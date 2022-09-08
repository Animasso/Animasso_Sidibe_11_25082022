import vectorRight from "../assets/VectorRight.png";
import vectorLeft from "../assets/VectorLeft.png";
import { useState } from "react";

function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const { oneHouse } = props;
  const allPictures = oneHouse.pictures;
  console.log("allPictures:", allPictures);
  const length = allPictures.length;
  console.log("length:", length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="carrousel">
      <div className="arrows">
        <span className="vectorLeft">
          <img src={vectorLeft} alt="" onClick={prevSlide} />
        </span>
        <span className="vectorRight">
          <img src={vectorRight} alt="" onClick={nextSlide} />
        </span>
      </div>
      {allPictures.map((picture, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={picture} alt="" className="carrouselImg" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;
