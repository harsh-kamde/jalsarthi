import React, { useState } from "react";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import "../stylesheets/OurServices.css";
import Service from "../components/Service";
import { Button } from "antd";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import EventModal from "../components/EventModel"; // Assuming you have an event model for booking services
import img1 from "../assets/team/water-usege.png";
import img2 from "../assets/team/water-control.png"; // Replace with relevant image
import img3 from "../assets/team/leek-detection.png"; // Replace with relevant image

const ServicesPage = () => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const navigateToUsageManagement = () => {
    navigate("/login");
  };

  const navigateToDistributionManagement = () => {
    navigate("/login");
  };

  const navigateToLeakageDetection = () => {
    navigate("/login");
  };

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/icon.webp" />
        <title>
          JalSaarthi Services - Water Usage Management, Distribution Control,
          and Leakage Detection
        </title>
        <meta
          name="title"
          content="JalSaarthi Services - Water Usage Management, Distribution Control, and Leakage Detection"
        />
        <meta
          name="description"
          content="Explore JalSaarthi's services including water usage management, distribution control, and leakage detection. Optimize water resources efficiently and address issues promptly with our comprehensive solutions."
        />
        <meta
          name="keywords"
          content="JalSaarthi services, water usage management, water distribution control, leakage detection, water management Bhopal"
        />
        <link rel="canonical" href="https://www.jalsaarthi.com/services" />
      </Helmet>

      <Header />

      <section className="container">
        <div id="service-section">
          <div className="section-title text-center">
            <h2>Our Services</h2>
            <p style={{ color: "var(--textLight)" }}>
              Here are the services we offer
            </p>
          </div>

          <div className="my-cards">
            <div className="service-card">
              <div className="service-icon">
                <img src={img1} alt="Water Usage Management" />
              </div>
              <div className="content">
                <h3>Water Usage Management</h3>
                <p>
                  Efficiently monitor and manage water usage in households to
                  ensure optimal resource allocation and prevent wastage.
                </p>

                <Button onClick={navigateToUsageManagement}>
                  Manage Usage
                </Button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={img2} alt="Water Distribution Control" />
              </div>

              <div className="content">
                <h3>Water Distribution Control</h3>
                <p>
                  Oversee and control the distribution of water across various
                  areas to maintain an effective and equitable supply.
                </p>
                <Button onClick={navigateToDistributionManagement}>
                  Manage Distribution
                </Button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={img3} alt="Leakage Detection" />
              </div>

              <div className="content">
                <h3>Leakage Detection</h3>
                <p>
                  Detect and address leaks promptly to prevent water loss and
                  ensure the integrity of the distribution system.
                </p>
                <Button onClick={navigateToLeakageDetection}>
                  Report a Leakage
                </Button>
              </div>
            </div>
          </div>

          {/* Modal for reporting a leakage */}
          {/* <EventModal
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            handleOk={handleOk}
          /> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
