import background from "../assets/background.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";
function Home(props) {
  const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
  const houses = useFetch(url);
  console.log(houses);
  return (
    <div>
      <div className="background">
        <img src={background} alt="background" />
        <div className="cta">Chez vous, partout et ailleurs</div>
      </div>

      <Gallery houses={houses} />
      {<Footer />}
    </div>
  );
}
export default Home;
