import React, { useState } from "react";
import Footer from "./Footer.jsx";
export default function Bookings() {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Booking Data:", data);

    if (!name || !checkIn || !checkOut || !roomType) {
      alert("Please complete all fields");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      alert("Check out must be after check in");
      return;
    }
  }
  return (
    <section className="book">
      <div
        className="bookings"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          background: "linear-gradient(to right, #3d0d3f, #10002d)",
          position: "relative", // keeps it in place under navbar
          zIndex: 1,
          height: "500px",
          display: "flex", // 👈 enables flexbox
          flexDirection: "column", // stack h1 and p vertically
          justifyContent: "center", // 👈 centers vertically
          alignItems: "center", // 👈 centers horizontally
          textAlign: "center", // centers text alignment
          color: "white",
          // makes sure hero text is visible
          opacity: "90%",
        }}
      >
        <div id="rooms">
          <h2>LIVING YOUR EXPERIENCE</h2>
          <span
            style={{ fontSize: "100px", position: "relative", top: "40px" }}
          >
            Our Rooms
          </span>
        </div>
      </div>
      <div className="book-stay">
        <h2>Book Your Stay</h2>
        <p id="book">choose your dates and room type to see availability</p>
        <span style={{ fontWeight: "bold" }}>Step 1 Select Dates</span>
        <div className="button-cont">
          <button>
            {" "}
            {" Check in:"}
            <input type="date" />
          </button>
          <button>
            {" Check out: "}
            <input type="date" />
          </button>
        </div>
        <button id="but-right">Show Available Rooms</button> <br />
        <span style={{ fontWeight: "bold" }}>Step 2 Choose Room Type</span>
        <div className="room-stay">
          <div className="room-one">
            <img
              src="Roomly-img.png"
              alt=""
              style={{ height: "90px", width: "90px", borderRadius: "2px" }}
            />
            <div>
              <p style={{ fontWeight: "bold" }}>Deluxe Queen Room</p>
              <p>$200/night</p>
              <p>A spacious room with a queen bed and city room</p>
            </div>
            <button id="but-select">Select Room</button>
            <hr />
          </div>
          <div className="room-one">
            <img
              src="photo.jpg"
              alt=""
              style={{
                height: "90px",
                width: "90px",
                borderRadius: "5px",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold" }}>Deluxe Twin Room</p>
              <p>$220/night</p>
              <p>A modern room with two twin beds and a city view</p>
            </div>
            <button id="but-select">Select Room</button>
            <hr />
          </div>
          <div className="room-one">
            <img
              src="Room.png"
              alt=""
              style={{
                height: "90px",
                width: "90px",
                borderRadius: "5px",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold" }}>Studio site</p>
              <p>$250/night</p>
              <p>
                A spacious suite with a large bed and a seperate living area
              </p>
            </div>
            <button id="but-select">Select Room</button>
          </div>
        </div>
        <section className="guest-info">
          <div>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              Step 3 Guest Information <br />
            </span>{" "}
            <br />
            <form action="./Nav" onSubmit={handleSubmit}>
              <span style={{ fontWeight: "bold", marginRight: "15px" }}>
                {" "}
                Name:{" "}
              </span>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br /> <br />
              <div className="field">
                <label>
                  <span style={{ fontWeight: "bold", marginRight: "15px" }}>
                    Check in:
                  </span>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <label>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "15px" }}>
                  Check out:
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                />{" "}
              </label>
              <br /> <br />
              <label>
                <span style={{ fontWeight: "bold", marginRight: "15px" }}>
                  Room Type{" "}
                </span>
                <select
                  value={roomType}
                  onChange={(e) => {
                    setRoomType(e.target.value);
                  }}
                >
                  <option value="Single Room"></option>
                  <option value="Deluxe">Exquisite</option>
                  <option value="Exquisite">Single Room</option>
                  <option value="Luxurious">Deluxe</option>
                </select>
              </label>
              <br /> <br />
              <button
                type="submit"
                style={{
                  fontWeight: "bold",
                  marginRight: "15px",
                  width: "100px",
                  marginLeft: "50px",
                }}
              >
                REVIEW BOOKING
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}
