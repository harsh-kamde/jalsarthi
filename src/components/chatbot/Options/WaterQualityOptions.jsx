// components/Options/WaterQualityOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const WaterQualityOptions = ({ setState }) => {
  const options = [
    {
      text: "Water Quality Reports",
      handler: () =>
        handleWaterQualityResponse(
          "You can view the latest water quality reports here: [Water Quality Reports Link]"
        ),
    },
    {
      text: "Contaminants in Water",
      handler: () =>
        handleWaterQualityResponse(
          "Information about contaminants in the water and their levels can be found here: [Contaminants Information Link]"
        ),
    },
    {
      text: "Water Testing Services",
      handler: () =>
        handleWaterQualityResponse(
          "To request water testing services, please visit: [Water Testing Services Link]"
        ),
    },
    {
      text: "Water Purification Methods",
      handler: () =>
        handleWaterQualityResponse(
          "Learn about the water purification methods we use here: [Purification Methods Link]"
        ),
    },
    {
      text: "Report Water Quality Issues",
      handler: () =>
        handleWaterQualityResponse(
          "If you have concerns about water quality, please report them here: [Report Issues Link]"
        ),
    },
  ];

  function handleWaterQualityResponse(response) {
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

export default WaterQualityOptions;
