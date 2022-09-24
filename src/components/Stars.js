import redStar from "../assets/RedStar.png";
import greyStar from "../assets/GreyStar.png";

function Stars(props) {
  const { oneHouse } = props;
  const rate = parseInt(oneHouse.rating);

  let arrayRedStar = [];
  let arrayGreyStar = [];
  for (let i = 1; i <= rate; i++) {
    arrayRedStar.push(rate);
  }
  for (let i = 1; i <= 5 - rate; i++) {
    arrayGreyStar.push(rate);
  }

  return (
    <div className="allStars">
      {arrayRedStar.map((star, index) => (
        <div className="stars">
          <img src={redStar} key={index} alt="" />
        </div>
      ))}
      {arrayGreyStar.map((star, index) => (
        <div className="stars">
          <img src={greyStar} key={index} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Stars;
