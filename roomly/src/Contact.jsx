import React from "react";
import Footer from "./Footer.jsx";
export default function Contact() {
  return (
    <section
      className="contact-sec"
      style={{ background: "linear-gradient(to right, pink, purple)" }}
    >
      <p
        style={{
          fontSize: "40px",
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "180px",
          fontFamily: "serif",
        }}
      >
        Have any Questions? <br />{" "}
      </p>{" "}
      <div id="con-img">
        <img
          src="contact.png"
          alt=""
          style={{
            height: "500px",
            width: "800px",
            paddingTop: "100px",
          }}
        />
      </div>
      <div
        style={{
          height: "150px",

          width: "1500px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1px",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <span style={{ fontSize: "18px", color: "white" }}>
          Feel free to reach out to us using the information provided below{" "}
        </span>
      </div>{" "}
      <div id="con-sec">
        <br /> <br />
        <div className="cons">
          <div className="con-one">
            <h2>Contact information</h2> <br />
            <span>60, Maryland Estate, ikeja Alley </span> <br />
            <span>+2349124901003</span> <br />
            <span>anthonyhassan1689@gmail.com</span> <br />
          </div>
          <div className="con-two">
            <h2>Send a message</h2>
            <input
              type="text"
              placeholder="Name"
              style={{ width: "300px" }}
            />{" "}
            <br /> <br />
            <input
              type="text"
              placeholder="Email"
              style={{ width: "300px" }}
            />{" "}
            <br /> <br />
            <input
              type="text"
              placeholder="Address"
              style={{ width: "300px" }}
            />{" "}
            <br /> <br />
            <input
              type="text"
              placeholder="Message"
              style={{ width: "300px" }}
            />{" "}
            <br /> <br />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      <Footer />
    </section>
  );
}
