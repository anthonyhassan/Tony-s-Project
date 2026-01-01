import React from "react";
import Hero from "./Hero.jsx";
import Rooms from "./Rooms.jsx";
import Logo from "./Logo.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#dadadf" }}>
      <Hero />
      <Logo />
      <Rooms />
      <Footer />
    </div>
  );
}
