import "./styles/styles.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HousingDetail from "./pages/HousingDetail";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Navbar from "./components/NavBar";
import useFetch from "./hooks/useFetch";

function App() {
  const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
  const houses = useFetch(url);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home houses={houses} />} />
        <Route />
        <Route
          path="/HousingDetail/:id"
          element={<HousingDetail houses={houses} />}
        />
        <Route />
        <Route path="/About" element={<About />} />
        <Route />
        <Route path="*" element={<Error404 />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
