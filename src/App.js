import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="menu" exact element={<Menu />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>

          <div className="container">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
