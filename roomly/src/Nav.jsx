import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = useState(false); // <-- dropdown toggle

  return (
    <nav
      className="navbar"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "0px 0",
        background: "rgba(0, 0, 0, 0)",
        color: "white",
        zIndex: 10,
      }}
    >
      <div className="listroom">
        <img
          src="Roomly-img.png"
          alt=""
          style={{ width: "45px", height: "45px", borderRadius: "10px" }}
        />
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          listStyle: "none",
          fontWeight: "bold",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Other items */}
        <li>
          <Link
            to="./"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "21px",
              paddingTop: "10px",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="./Bookings"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "21px",
              paddingTop: "10px",
            }}
          >
            Bookings
          </Link>
        </li>

        <li>
          <Link
            to="./About"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "21px",
              paddingTop: "10px",
            }}
          >
            About
          </Link>
        </li>

        <li>
          <img
            src="photo.jpg"
            alt=""
            style={{ width: "90px", height: "90px", borderRadius: "10%" }}
          />
        </li>

        <li>
          <Link
            to="./Contact"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "21px",
              paddingTop: "10px",
            }}
          >
            Contact
          </Link>
        </li>

        {/* ⭐ My Account Dropdown */}
        <li
          className="account-dropdown"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          <div className="nav account">My Account ▼</div>

          {open && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "35px",
                right: 0,
                background: "white",
                padding: "10px",
                borderRadius: "6px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                color: "black",
                listStyle: "none",
              }}
            >
              <li style={{ padding: "5px 0" }}>
                <Link to="/profile" style={{ textDecoration: "yellow" }}>
                  Terms and conditions
                </Link>
              </li>
              <li style={{ padding: "5px 0" }}>
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="nav policies"
          style={{ color: "black", fontSize: "21px", paddingBottom: "5px" }}
        >
          <Link
            to="./Policies"
            style={{ textDecoration: "none", color: "black" }}
          >
            Policies
          </Link>
        </li>
      </ul>
    </nav>
  );
}
