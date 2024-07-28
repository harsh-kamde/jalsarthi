// components/Options/BillingAndPaymentsOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const BillingAndPaymentsOptions = ({ setState }) => {
  const options = [
    {
      text: " Payment Methods",
      handler: () =>
        handleBillingAndPaymentsResponse(
          "For payments, you can use the following methods: Bank Transfer, Check, or Cash. Please contact our office for details on how to proceed: [Contact Office Link]"
        ),
    },
    {
      text: "Invoice Request",
      handler: () =>
        handleBillingAndPaymentsResponse(
          "To request an invoice, please fill out this form: [Invoice Request Link]"
        ),
    },
    {
      text: "Payment Terms and Conditions",
      handler: () =>
        handleBillingAndPaymentsResponse(
          "Our payment terms and conditions can be reviewed here: [Payment Terms Link]"
        ),
    },
    {
      text: "Billing Inquiries",
      handler: () =>
        handleBillingAndPaymentsResponse(
          "For any billing inquiries, please contact us at: [Billing Inquiries Contact Link]"
        ),
    },
  ];

  function handleBillingAndPaymentsResponse(response) {
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

export default BillingAndPaymentsOptions;
