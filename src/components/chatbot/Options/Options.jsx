import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const Options = ({ setState }) => {
  const createHandler = (widgetName) => () => {
    console.log("createHandler called", widgetName);
    const messages = [
      createChatBotMessage('What would you like to know?', {
        widget: widgetName,
      }),
    ];
    setState((prev) => ({ ...prev, messages: [...prev.messages, ...messages] }));
  };

  const options = [
    { text: "General Information", widgetName: "generalInfoOptions" },
    { text: "Report Issues", widgetName: "reportIssuesOptions" },
    { text: "Billing and Payments", widgetName: "billingAndPaymentsOptions" },
    { text: "New Connections", widgetName: "newConnectionsOptions" },
    { text: "Water Quality", widgetName: "waterQualityOptions" },
    { text: "Water Conservation Tips", widgetName: "conservationTipsOptions" },
    { text: "Maintenance Requests", widgetName: "maintenanceRequestsOptions" },
    { text: "Additional Features", widgetName: "additionalFeaturesOptions" },
  ];

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={createHandler(option.widgetName)}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
