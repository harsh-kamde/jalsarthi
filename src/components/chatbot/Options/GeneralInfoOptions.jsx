// components/Options/GeneralInfoOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const GeneralInfoOptions = ({ setState }) => {
  const options = [
    {
      text: "Office Hours",
      handler: () =>
        handleGeneralInfoResponse(
          "Our office hours are: Monday to Friday: 9 AM - 5 PM"
        ),
    },
    {
      text: "Office Location",
      handler: () =>
        handleGeneralInfoResponse(
          "Our office is located at [Office Address]. Here is a link to our location on Google Maps: [Map Link]"
        ),
    },
    {
      text: "Contact Details",
      handler: () =>
        handleGeneralInfoResponse(
          "You can contact us at: Phone: [Phone Number], Email: [Email Address]"
        ),
    },
    {
      text: "Emergency Hotline",
      handler: () =>
        handleGeneralInfoResponse(
          "For water supply emergencies, please contact our emergency hotline at [Emergency Hotline Number]"
        ),
    },
    {
      text: "Water Quality Reports",
      handler: () =>
        handleGeneralInfoResponse(
          "You can view our latest water quality reports here: [Water Quality Report Link]"
        ),
    },
    {
      text: "Billing Inquiries",
      handler: () =>
        handleGeneralInfoResponse(
          "For billing inquiries, please visit our billing section on the website: [Billing Section Link] or contact our billing department at [Billing Contact Number]."
        ),
    },
  ];

  function handleGeneralInfoResponse(response) {
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

export default GeneralInfoOptions;
