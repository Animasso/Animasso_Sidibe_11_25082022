import background from "../assets/background.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
// import useFetch from "../hooks/useFetch";
function Home(props) {
  const { houses } = props;
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
