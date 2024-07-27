import React, { useState, useContext } from "react";
import "../stylesheets/Home/Service.css";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/services/1.png";
import img2 from "../assets/services/2.png";
import img3 from "../assets/services/3.png";
import img4 from "../assets/services/4.png";

import { StoreContext } from "../context/StoreContext";
import EventModal from "./EventModel";

const Service = () => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(img1);
  const [serviceName, setServiceName] = useState("Online Food Delivery");
  const [buttonLabel, setButtonLabel] = useState("Order Now");
  const [serviceInfo, setServiceInfo] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium labore ducimus perferendis debitis quod quibusdam laborum doloribus ipsum quos corporis?"
  );

  const { token } = useContext(StoreContext);
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

  // Handler function to update the main image and content
  const handleThumbnailClick = (image, name, info, label) => {
    setMainImage(image);
    setServiceName(name);
    setServiceInfo(info);
    setButtonLabel(label);
  };

  // Functions to handle different button actions
  const handleOrderNow = () => {
    navigate("/menu");
  };

  const handleBookTable = () => {
    navigate("/reservation");
  };

  const handleReserveHut = () => {
    navigate("/reservation");
  };

  const handleOrganizeEvent = () => {
    showModal();
  };

  const handleButtonClick = () => {
    switch (buttonLabel) {
      case "Order Now":
        handleOrderNow();
        break;
      case "Book a Table":
        handleBookTable();
        break;
      case "Reserve a Hut":
        handleReserveHut();
        break;
      case "Organize an Event":
        handleOrganizeEvent();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="container home-services">
        <div className="service-container">
          <div className="row">
            <div className="container col-12 col-lg-6 order-lg-first order-last">
              <h1 className="title">{serviceName}</h1>
              <p className="description">{serviceInfo}</p>
              <button className="order-now" onClick={handleButtonClick}>
                {buttonLabel}
              </button>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 order-md-first order-sm-first right-content">
              <img
                src={mainImage}
                alt="Delicious Food"
                className="food-image"
              />
            </div>
          </div>
        </div>

        <div className="food-thumbnails">
          <div className="service-card">
            <img
              src={img1}
              alt="Food Thumbnail 1"
              onClick={() =>
                handleThumbnailClick(
                  img1,
                  "Online Food Delivery",
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium labore ducimus perferendis debitis quod quibusdam laborum doloribus ipsum quos corporis?",
                  "Order Now"
                )
              }
            />
            <div className="content">
              <h5>Online Food Delivery</h5>
            </div>
          </div>

          <div className="service-card">
            <img
              src={img2}
              alt="Food Thumbnail 2"
              onClick={() =>
                handleThumbnailClick(
                  img2,
                  "Table Booking",
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio ratione ipsam ab dignissimos amet, officia odio assumenda, libero, ex explicabo tenetur. Eos, nobis amet.",
                  "Book a Table"
                )
              }
            />
            <div className="content">
              <h5>Table Booking</h5>
            </div>
          </div>

          <div className="service-card">
            <img
              src={img3}
              alt="Food Thumbnail 3"
              onClick={() =>
                handleThumbnailClick(
                  img3,
                  "Hut Reservation",
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laudantium iure quis in esse rem, iusto distinctio optio?",
                  "Reserve a Hut"
                )
              }
            />
            <div className="content">
              <h5>Hut Reservation</h5>
            </div>
          </div>

          <div className="service-card">
            <img
              src={img4}
              alt="Food Thumbnail 4"
              onClick={() =>
                handleThumbnailClick(
                  img4,
                  "Event Organization",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem corrupti, libero quaerat sint recusandae ipsa, amet eius dolorum nam incidunt doloremque rem molestiae explicabo impedit eligendi ullam sapiente dignissimos!",
                  "Organize an Event"
                )
              }
            />
            <div className="content">
              <h5>Event Organization</h5>
            </div>
          </div>
        </div>

        {/* Modal to organize event */}
        <EventModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          handleOk={handleOk}
        />

        <hr
          style={{
            marginTop: "2rem",
            color: "var(--bgLight)",
            opacity: "0.35",
          }}
        />
      </section>
    </>
  );
};

export default Service;
