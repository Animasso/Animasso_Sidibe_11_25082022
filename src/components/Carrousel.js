import vectorRight from "../assets/VectorRight.png";
import vectorLeft from "../assets/VectorLeft.png";
import { useState } from "react";

function Carrousel(props) {
  const [current, setCurrent] = useState(0);
  const { oneHouse } = props;
  const allPictures = oneHouse.pictures;

  const length = allPictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carrousel">
      {allPictures.length > 1 && (
        <>
          <img
            src={vectorLeft}
            className="vectorLeft"
            alt=""
            onClick={prevSlide}
          />
          <img
            src={vectorRight}
            className="vectorRight"
            alt=""
            onClick={nextSlide}
          />
        </>
      )}

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
