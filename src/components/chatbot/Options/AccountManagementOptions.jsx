// components/Options/AccountManagementOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const AccountManagementOptions = ({ setState }) => {
  const options = [
    {
      text: "Update Account Information",
      handler: () =>
        handleAccountManagementResponse(
          "To update your account information, please visit: [Update Account Information Link]"
        ),
    },
    {
      text: "View Billing History",
      handler: () =>
        handleAccountManagementResponse(
          "You can view your billing history here: [Billing History Link]"
        ),
    },
    {
      text: "Change Password",
      handler: () =>
        handleAccountManagementResponse(
          "To change your password, follow these steps: [Change Password Link]"
        ),
    },
    {
      text: "Set Up Auto-Pay",
      handler: () =>
        handleAccountManagementResponse(
          "To set up auto-pay for your bills, please visit: [Auto-Pay Setup Link]"
        ),
    },
    {
      text: "Deactivate Account",
      handler: () =>
        handleAccountManagementResponse(
          "If you wish to deactivate your account, please contact us through this link: [Deactivate Account Link]"
        ),
    },
  ];

  function handleAccountManagementResponse(response) {
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

export default AccountManagementOptions;
