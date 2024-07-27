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
            <div className="col-lg-0 col-md-0">
              <div className="mb-4 section-title text-center">
                <h2>MIC Member</h2>
                <p style={{ color: "var(--textLight)" }}>
                  Here is Municipal orporation members handle local governance,
                  services, infrastructure, and community development.
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
