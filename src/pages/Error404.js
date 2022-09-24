import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function Error404(props) {
  let navigate = useNavigate();
  return (
    <>
      <div className="error">
        <div className="numberError">404</div>
        <div className="textError">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div
          className="redirectLink"
          onClick={() => {
            navigate("/");
          }}
        >
          Retourner à la page d'accueil
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
