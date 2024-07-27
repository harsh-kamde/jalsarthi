// components/Options/ConservationTipsOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const ConservationTipsOptions = ({ setState }) => {
  const options = [
    {
      text: "Save Water at Home",
      handler: () =>
        handleConservationTipsResponse(
          "Here are some tips to save water at home: Fix leaks promptly, use water-efficient fixtures, take shorter showers, and avoid leaving the tap running. For more tips, visit: [Home Water Conservation Link]"
        ),
    },
    {
      text: "Water-Efficient Appliances",
      handler: () =>
        handleConservationTipsResponse(
          "Consider using water-efficient appliances like dishwashers and washing machines. Learn more about these appliances here: [Water-Efficient Appliances Link]"
        ),
    },
    {
      text: "Landscape Watering Tips",
      handler: () =>
        handleConservationTipsResponse(
          "Use drought-resistant plants and water your garden during cooler parts of the day to reduce evaporation. Get more landscaping tips here: [Landscape Watering Tips Link]"
        ),
    },
    {
      text: "Community Water Programs",
      handler: () =>
        handleConservationTipsResponse(
          "Participate in community water conservation programs and events. Find out more about upcoming programs here: [Community Water Programs Link]"
        ),
    },
  ];

  function handleConservationTipsResponse(response) {
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

export default ConservationTipsOptions;
