import React from "react";
import img1 from "../../assets/about/1.png"; // Replace with actual paths
import img2 from "../../assets/about/2.png";
import img3 from "../../assets/about/3.png";
import img4 from "../../assets/about/4.png";
import "../../stylesheets/Home/About.css";

const About = () => {
  return (
    <>
      <section className="announcements">
        <div className="section-title text-center">
          <h2>Why to use JalSaarthi?</h2>
          <p style={{ color: "var(--textLight)" }}>
            Discover the features of JalSaarthi that make water management efficient and effective
          </p>
        </div>

        <div className="paddings innerWidth flexCenter announce-container">
          <div className="announceCard">
            <img src={img1} alt="Water Usage Monitoring" className="rounded-image" />
            <h3>Efficient Water Usage</h3>
            <p>
              Monitor and manage water consumption efficiently to ensure optimal usage.
            </p>
          </div>
          <div className="announceCard">
            <img src={img2} alt="Water Distribution Management" className="rounded-image" />
            <h3>Effective Distribution</h3>
            <p>
              Streamline the distribution of water to different areas for better resource allocation.
            </p>
          </div>
          <div className="announceCard">
            <img src={img2} alt="Leakage Detection" className="rounded-image" />
            <h3>Leakage Detection</h3>
            <p>
              Quickly identify and address leaks to minimize water wastage.
            </p>
          </div>
          <div className="announceCard">
            <img src={img4} alt="User Management" className="rounded-image" />
            <h3>Manage Users</h3>
            <p>
              Efficiently manage users and their water usage to ensure proper billing and support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
