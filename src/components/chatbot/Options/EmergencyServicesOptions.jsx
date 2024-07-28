// components/Options/EmergencyServicesOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const EmergencyServicesOptions = ({ setState }) => {
  const options = [
    {
      text: "Report a Water Leak",
      handler: () =>
        handleEmergencyServicesResponse(
          "To report a water leak, please fill out this form: [Leak Report Form Link] or call us at [Emergency Phone Number]."
        ),
    },
    {
      text: "Report Water Contamination",
      handler: () =>
        handleEmergencyServicesResponse(
          "If you suspect water contamination, please report it here: [Contamination Report Link] or contact us at [Emergency Phone Number]."
        ),
    },
    {
      text: "Emergency Water Supply",
      handler: () =>
        handleEmergencyServicesResponse(
          "For emergency water supply services, please request assistance here: [Emergency Supply Request Link] or call [Emergency Phone Number]."
        ),
    },
    {
      text: "Contact Emergency Support",
      handler: () =>
        handleEmergencyServicesResponse(
          "For immediate assistance, contact our emergency support team at [Emergency Phone Number] or email [Emergency Support Email]."
        ),
    },
  ];

  function handleEmergencyServicesResponse(response) {
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

export default EmergencyServicesOptions;
