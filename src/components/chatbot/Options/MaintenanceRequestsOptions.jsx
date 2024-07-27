// components/Options/MaintenanceRequestsOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const MaintenanceRequestsOptions = ({ setState }) => {
  const options = [
    {
      text: "Report a Leak",
      handler: () =>
        handleMaintenanceRequestsResponse(
          "To report a water leak, please fill out the form here: [Report Leak Link]"
        ),
    },
    {
      text: "Request Pipe Repair",
      handler: () =>
        handleMaintenanceRequestsResponse(
          "To request pipe repair services, submit your request here: [Pipe Repair Request Link]"
        ),
    },
    {
      text: "Schedule Maintenance Check",
      handler: () =>
        handleMaintenanceRequestsResponse(
          "To schedule a maintenance check, please visit: [Maintenance Check Link]"
        ),
    },
    {
      text: "Emergency Maintenance",
      handler: () =>
        handleMaintenanceRequestsResponse(
          "For emergency maintenance requests, contact us immediately here: [Emergency Maintenance Link]"
        ),
    },
    {
      text: "Maintenance FAQ",
      handler: () =>
        handleMaintenanceRequestsResponse(
          "Find answers to frequently asked maintenance questions here: [Maintenance FAQ Link]"
        ),
    },
  ];

  function handleMaintenanceRequestsResponse(response) {
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

export default MaintenanceRequestsOptions;
