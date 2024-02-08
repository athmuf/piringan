import "./style/index.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailRecipe from "./pages/DetailRecipe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<DetailRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
