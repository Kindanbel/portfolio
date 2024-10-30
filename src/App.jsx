import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/HomeScreen/Home";
import About from "./screens/About/About";
//import Testimonials from "./screens/Testimonials/Testimonials";
import Contact from "./screens/Contact/Contact";
import Portfolio from "./screens/Porfolio/Portfolio";
import Resume from "./screens/Resume/Resume";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (like data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  {/*if (loading) {
    return <Preloader />;
  } */}
  
  return (
    <>
    <div className="overflow-hidden">
      <BrowserRouter>
      {loading && <Preloader />} {/* Show Preloader while loading */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
