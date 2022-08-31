import NavBar from "../components/NavBar";
import background from "../assets/background.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
function Home(props) {
  return (
    <div>
      <NavBar />
      <div className="background">
        <img src={background} alt="background" />
      </div>
      <div className="cta">Chez vous, partout et ailleurs</div>
      <Gallery />
      {<Footer />}
    </div>
  );
}
export default Home;
