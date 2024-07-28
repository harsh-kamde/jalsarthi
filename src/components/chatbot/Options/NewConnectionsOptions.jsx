// components/Options/NewConnectionsOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const NewConnectionsOptions = ({ setState }) => {
  const options = [
    {
      text: "Apply for New Connection",
      handler: () =>
        handleNewConnectionsResponse(
          "You can apply for a new water connection here: [New Connection Application Link]"
        ),
    },
    {
      text: "Check Connection Status",
      handler: () =>
        handleNewConnectionsResponse(
          "To check the status of your new connection application, please visit: [Check Status Link]"
        ),
    },
    {
      text: "Required Documents",
      handler: () =>
        handleNewConnectionsResponse(
          "The documents required for a new connection include: Proof of Identity, Proof of Address, and Property Documents. For more details, visit: [Required Documents Link]"
        ),
    },
    {
      text: "Connection Fees",
      handler: () =>
        handleNewConnectionsResponse(
          "Information about connection fees can be found here: [Connection Fees Link]"
        ),
    },
    {
      text: "Contact for Assistance",
      handler: () =>
        handleNewConnectionsResponse(
          "For any assistance with new connections, please contact us at: [Contact Details Link]"
        ),
    },
  ];

  function handleNewConnectionsResponse(response) {
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

export default NewConnectionsOptions;
