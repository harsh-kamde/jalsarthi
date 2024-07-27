import React from "react";
import "../stylesheets/Contact.css";

const ContactPageHeader = () => {
  return (
    <section className="contact" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="contact-header">
          <h1>Help & Support</h1>
          <p>
            Contact JalSaarthi for assistance with water management services. 
            We're here to help with any questions or issues related to water usage, 
            distribution, or leakage detection. Reach out via phone, email, or visit 
            us. We look forward to assisting you!
          </p>
        </div>

        <div className="row">
          {/* <!-- Contact Info item --> */}
          <div className="contact-info-item pad-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h3>Helpline Number</h3>
            <p>+91 1234567890</p>
          </div>

          {/* <!-- Contact Info item --> */}
          <div className="contact-info-item pad-15">
            <div className="icon">
              <i className="fa fa-map"></i>
            </div>
            <h3>Address</h3>
            <p>Bhopal, 102030, MP, India</p>
          </div>

          {/* <!-- Contact Info item --> */}
          <div className="contact-info-item pad-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>support@jalsaarthi.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageHeader;
