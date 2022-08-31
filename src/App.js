import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousingDetail from "./pages/HousingDetail";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route path="/HousingDetail" element={<HousingDetail />} />
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
