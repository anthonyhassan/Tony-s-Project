import React from "react";

export default function Hero() {
  return (
    <div
      className="imaged"
      style={{
        backgroundImage: "url('/photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        display: "flex", // 👈 enables flexbox
        flexDirection: "column", // stack h1 and p vertically
        justifyContent: "center", // 👈 centers vertically
        alignItems: "center", // 👈 centers horizontally
        textAlign: "center", // centers text alignment
        color: "white",
        position: "relative", // keeps it in place under navbar
        zIndex: 1, // makes sure hero text is visible
        opacity: "95%",
        marginTop: "0px",
      }}
    >
      <div className="heroic fade-spread">
        <h1
          className="hero-title"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "white",
          }}
        >
          WELCOME TO ROOMLY
        </h1>
        <p
          className="hero-sub"
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            fontFamily: "serif",
            color: "white",
          }}
        >
          Book your perfect stay with us
        </p>
      </div>
    </div>
  );
}
