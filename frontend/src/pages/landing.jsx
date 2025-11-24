import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LandingPage() {
  const router = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Video Call</h2>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className="navlist">
          <p
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div>
          <div className="mobileNav">
            <p
              onClick={() => {
                router("/aljk23");
              }}
            >
              Join as Guest
            </p>
            <p
              onClick={() => {
                router("/auth");
              }}
            >
              Register
            </p>
            <div
              onClick={() => {
                router("/auth");
              }}
              role="button"
            >
              <p>Login</p>
            </div>
          </div>
        </div>
      )}

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Video Call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
