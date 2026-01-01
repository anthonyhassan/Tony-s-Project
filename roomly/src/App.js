import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Bookings from "./Bookings.jsx";
import About from "./About.jsx";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Contact from "./Contact.jsx";
import Profile from "./profile.jsx";
import Policies from "./Policies.jsx";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Policies" element={<Policies />} />
      </Routes>
    </Router>
  );
}

export default App;
