import redStar from "../assets/RedStar.png";
import greyStar from "../assets/GreyStar.png";
function Stars(props) {
  const { oneHouse } = props;
  const rate = parseInt(oneHouse.rating);
  console.log(rate);
  let arrayRedStar = [];
  let arrayGreyStar = [];
  for (let i = 1; i <= rate; i++) {
    arrayRedStar.push(rate);
  }
  for (let i = 1; i <= 5 - rate; i++) {
    arrayGreyStar.push(rate);
  }
  console.log("arrayGreyStar:", arrayGreyStar);
  console.log(arrayRedStar);
  return (
    <div className="allStars">
      {arrayRedStar.map((star) => {
        return (
          <div className="stars">
            <img src={redStar} alt="" />
          </div>
        );
        // arrayGreyStar.map((star) => {
        //   <div className="stars">
        //     <img src={greyStar} alt="" />;
        //   </div>;
        // });
      })}
    </div>
  );
  // <img src={greyStar} alt="" />
  // for (let i = 1; i <= rate; i++) {
  //   {
  //     <div className="star">
  //       <img src={redStar} alt="" />
  //     </div>;
  //   }
  //   console.log(arrayRedStar);

  // }

  //
  //   }
}

export default Stars;
