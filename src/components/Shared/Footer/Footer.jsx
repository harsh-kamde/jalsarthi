import React from "react";
import "../../../stylesheets/Footer/Footer.css";
import { NavLink } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        JalSaarthi
          <p style={{ color: "#7f7e91" }}>
            JalSaarthi: Efficient Water Supply Management Solutions
          </p>

          <div className="social-media-buttons">
            <NavLink
              to="/"
              style={{ background: "#0a63bc" }}
              className="link"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </NavLink>
            <NavLink
              to="/"
              style={{ background: "#3b5998" }}
              className="link"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </NavLink>
            <NavLink
              to="/"
              style={{ background: "#db1c8a" }}
              className="link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </NavLink>
            <NavLink
              to="/"
              style={{ background: "#03a9f4" }}
              className="link"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </NavLink>
          </div>
        </div>

        <div className="footer-content-center">
          <h2 className="footer-heading">Company</h2>
          <ul>
            <li>
              <NavLink to="/">
                <FaAngleDoubleRight className="icon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <FaAngleDoubleRight className="icon" /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services">
                <FaAngleDoubleRight className="icon" /> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaAngleDoubleRight className="icon" /> Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">
                <FaAngleDoubleRight className="icon" /> Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h2 className="footer-heading">Resources</h2>
          <ul>
            <li>
              <NavLink to="/faq">
                <FaAngleDoubleRight className="icon" /> FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <FaAngleDoubleRight className="icon" /> Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-guides">
                <FaAngleDoubleRight className="icon" /> User Guides
              </NavLink>
            </li>
            <li>
              <NavLink to="/case-studies">
                <FaAngleDoubleRight className="icon" /> Case Studies
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2 className="footer-heading">Get in touch</h2>
          <ul>
            <li>
              <NavLink to={"tel:+910000000000"}>
                <span className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>{" "}
                +91 00000 00000
              </NavLink>
            </li>
            <li>
              <NavLink to={"mailto:support@jalsaarthi.com"}>
                <span className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>{" "}
                support@jalsaarthi.com
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © JalSaarthi - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
