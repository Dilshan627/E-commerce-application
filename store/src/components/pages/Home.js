import React from "react";
import image from "../assets/80266190.jpg";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div>
      <div className="slider">
        <Link to="/item">
          <button className="home-button home-btn">GO TO STORE</button>
        </Link>
        <img src={image} alt="..." />
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">&copy; 2023 All rights reserved.</p>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
