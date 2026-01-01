import React from "react";
import Footer from "./Footer.jsx";
export default function About() {
  return (
    <section style={{ backgroundColor: "#dadadf" }}>
      <div className="About" style={{ color: "white", marginTop: "" }}>
        <span style={{ fontSize: "100px" }}> About us </span>
        <img
          className="wrap-img"
          src="Room.png"
          alt=""
          style={{
            borderRadius: "30px",
            height: "90px",
            width: "100px",
            position: "relative",
            top: "60px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          gap: "10px",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "serif" }}>Get to meet us</h1>
          <p>
            Roomly is a a hotel booking platform that makes it easy for
            travelers <br />
            to find and book accomodations. Our mission is to provide a seamless{" "}
            <br />
            and enjoyable experience for our users, ensuring they can find a{" "}
            <br />
            perfect place to stay. At Roomly, We offer the best services and{" "}
            <br />
            render with maximum care comfort to all out customers. We ensure{" "}
            <br />
            that affordability and maximum receptivity go hand in hand
          </p>
        </div>

        <img
          src="photo.jpg"
          alt=""
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1> 🌿 OUR VALUES</h1>
        <br />
        <ul>
          <li>Simple and warm</li>

          <li>
            Comfort First: We prioritize your peace, rest, and relaxation.
          </li>

          <li>Cleanliness: Every room is prepared with care and attention.</li>

          <li>Hospitality: We treat every guest like family.</li>

          <li>Reliability: What you book is exactly what you get.</li>

          <li>Care: Your satisfaction guides everything we do </li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <h1 style={{ marginTop: "30px", marginBottom: "30px" }}>
          Why choose Roomly
        </h1>
        <div className="span-col">
          <span style={{ fontWeight: "300", fontSize: "20px", margin: "auto" }}>
            Wide selection of accomodations
          </span>

          <span style={{ fontWeight: "300", fontSize: "20px", margin: "auto" }}>
            Secure booking
          </span>

          <span style={{ fontWeight: "300", fontSize: "20px" }}>
            Customer Support
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
}
