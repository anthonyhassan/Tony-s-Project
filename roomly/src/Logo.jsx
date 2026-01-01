import React from "react";

export default function Logo() {
  return (
    <div
      className="logo"
      style={{
        marginBottom: "",
        height: "650px",
        marginTop: "-40px",
      }}
    >
      <img
        src="Roomy.png"
        alt=""
        className="logo-img"
        style={{ height: "350px", width: "350px" }}
      />
      <div>
        <span
          style={{
            fontFamily: "'Marcellus',  Sans-serif",
            fontSize: "60px",
            fontWeight: "400",
            display: " block",
            marginTop: "-30px",

            marginBottom: "30px",
            color: "",
          }}
        >
          ROOMLY BOOKING WEBSITE
        </span>
      </div>
      <p style={{ fontSize: "18px", fontFamily: "Marcellus", marginTop: "" }}>
        At Roomly, we pride ourselves on delivering exceptional hospitality,
        where <br />
        every guest feels valued and cared for. From the moment you book to the{" "}
        <br />
        time you check out, our commitment to comfort and convenience is sure
      </p>
      <button
        style={{
          color: "",
          backgroundColor: "",
          width: "130px",
          height: "30px",
          fontSize: "17px",
          marginTop: "30px",
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
}
