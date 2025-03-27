import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import WoodShowcase from "./components/WoodShowcase";
import WoodDetailPage from "./pages/WoodDetailPage";
import Contact from "./components/Contact";
import About from "./components/About";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <section id="woodshowcase" className="section">
              <WoodShowcase />
            </section>
            <Contact />
          </>
        } />
        <Route path="/wood/:woodName" element={<WoodDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
