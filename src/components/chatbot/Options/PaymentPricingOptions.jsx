// components/Options/PaymentPricingOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const PaymentPricingOptions = ({ setState}) => {
  const options = [
    { text: 'Accepted Payment Methods', handler: () => handlePaymentPricingResponse('We accept various payment methods including credit/debit cards, PayPal, and cash. For a full list of accepted payment methods, click here: [Payment Methods Link]') },
    { text: 'Pricing Information', handler: () => handlePaymentPricingResponse('You can view our pricing information here: [Pricing Info Link]') },
    { text: 'Apply Discount Code', handler: () => handlePaymentPricingResponse('To apply a discount code, enter the code at checkout or click here: [Apply Discount Link]') },
    { text: 'Refund Policy', handler: () => handlePaymentPricingResponse('Our refund policy can be found here: [Refund Policy Link]') },
  ];

  function handlePaymentPricingResponse(response) {
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

export default PaymentPricingOptions;
