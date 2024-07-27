import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import "../../stylesheets/Home/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section" style={{ marginTop: "0px" }}>
        <div className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side order-lg-first order-last">
              <h1 className="sky-hut-offers">
                JalSaarthi: Advanced Water Management System{" "}
                <TypeAnimation
                  className="typing"
                  sequence={[
                    "Track Usage",
                    1000,
                    "Monitor Distribution",
                    1000,
                    "Manage Leakages",
                    1000,
                    "Optimize Resources",
                    1000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </h1>

              <p className="main-header-para">
                Welcome to JalSaarthi, your comprehensive solution for efficient water management. Our system helps you monitor water usage, manage distribution, handle leakages, and respond to user requests effectively. Optimize your water resources with our user-friendly platform designed to ensure sustainability and operational efficiency.
              </p>

              <div>
                <NavLink to={"/dashboard"} className="btn-get-started">
                  Explore Dashboard
                </NavLink>
              </div>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 img-container p-3">
  <img
    src="https://www.nitw.ac.in/uba/assets/img/water_mng.jpg" // Replace with the path to your image
    alt="Water Management System"
    className="img-fluid rounded-image"
  />
</div>


          </div>
        </div>

        <hr
          style={{
            height: "2px",
            marginTop: "5rem",
            color: "var(--headingColor)",
            opacity: "0.4",
          }}
        />
      </section>
    </>
  );
};

export default HeroSection;
