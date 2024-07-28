// components/Options/AdditionalFeaturesOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const AdditionalFeaturesOptions = ({ setState }) => {
  const options = [
    {
      text: "Online Bill Payment",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "You can pay your water bills online through this portal: [Bill Payment Portal Link]"
        ),
    },
    {
      text: "Water Usage Reports",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "Access detailed water usage reports for your household here: [Water Usage Reports Link]"
        ),
    },
    {
      text: "Leakage Reporting",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "Report water leakage issues through this form: [Leakage Reporting Form Link]"
        ),
    },
    {
      text: "Schedule Maintenance",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "Schedule maintenance or repair requests here: [Maintenance Scheduling Link]"
        ),
    },
    {
      text: "Water Quality Notifications",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "Receive notifications about water quality updates: [Water Quality Notifications Link]"
        ),
    },
    {
      text: "Contact Customer Support",
      handler: () =>
        handleAdditionalFeaturesResponse(
          "Get in touch with our customer support team at [Support Email] or call [Support Phone Number]."
        ),
    },
  ];

  function handleAdditionalFeaturesResponse(response) {
    const message = createChatBotMessage(response);
    setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  }

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button key={index} onClick={option.handler} className="option-button">
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default AdditionalFeaturesOptions;
