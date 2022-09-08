// import Dropdown from "../components/Dropdown";
import NavBar from "../components/NavBar";
import aPropos from "../assets/Apropos.png";

import AboutDropdown from "../components/AboutDropdown";
function About(props) {
  <NavBar />;
  return (
    <div>
      <div className="background">
        <img src={aPropos} alt="background" />
      </div>
      <div className="aboutDropdowns">
        <AboutDropdown
          titleBox="Fiabilité"
          content="Les annonces postées sur Kasa garantissent 
          une fiabilité totale. Les photos sont conformes aux logements, 
          et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />

        <AboutDropdown
          titleBox="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <AboutDropdown
          titleBox="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
           N'hésitez pas à nous contacter si vous avez la moindre question."
        />

        <AboutDropdown
          titleBox="Description"
          content="Sécurité
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
           chaque logement correspond aux critères de sécurité établis par nos services. 
           En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          "
        />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default About;
