import { NavLink } from "react-router-dom";
function Error404(props) {
  return (
    <div className="error">
      <div className="numberError">404</div>
      <div className="textError">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <div className="redirectLink">
        <NavLink to="/">Retourner à la page d'accueil</NavLink>{" "}
      </div>
    </div>
  );
}

export default Error404;
