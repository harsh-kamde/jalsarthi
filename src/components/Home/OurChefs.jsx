import React from "react";
import "../../stylesheets/Home/OurChefs.css";
import Chefs from "./Chefs";

import img from "../../assets/chef-img.webp";

const OurChefs = () => {
  return (
    <section className="container">
      <div className="section-features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12 chef-img">
              {/* <img src={img} alt="..." /> */}
              <img src='https://impact.monash.edu/wp-content/uploads/2022/07/Alliance-teams-3000x2000.jpg' alt="..." />
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="mb-4 section-title text-center">
                <h2>Our Team</h2>
                <p style={{ color: "var(--textLight)" }}>
                  Here is our dedicated team behind this innovation
                </p>
              </div>
              <Chefs />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: "2px",
          color: "var(--textLight)",
          opacity: "0.35",
        }}
      />
    </section>
  );
};

export default OurChefs;
