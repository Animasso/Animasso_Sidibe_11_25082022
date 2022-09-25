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
        <div className="stars" key={index}>
          <img src={redStar} alt="" />
          {console.log(index)}
        </div>
      ))}
      {arrayGreyStar.map((star, index) => (
        <div className="stars" key={index}>
          <img src={greyStar} alt="" />
          {console.log(index)}
        </div>
      ))}
    </div>
  );
}

export default Stars;
