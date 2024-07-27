// components/Options/AdditionalFeaturesOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const AdditionalFeaturesOptions = ({ setState}) => {
  const options = [
    { text: 'QR Code for Offline Orders', handler: () => handleAdditionalFeaturesResponse('Scan this QR code to place an offline order: [QR Code Link]') },
    { text: 'Automated Discounts and Offers', handler: () => handleAdditionalFeaturesResponse('Learn about our automated discounts and offers here: [Discounts Link]') },
    { text: 'Loyalty Points', handler: () => handleAdditionalFeaturesResponse('Earn and redeem loyalty points. Learn more here: [Loyalty Points Link]') },
    { text: 'Email Notifications', handler: () => handleAdditionalFeaturesResponse('Receive email notifications for new orders, events, and reservations. Set up your preferences here: [Email Notifications Link]') },
  ];

  function handleAdditionalFeaturesResponse(response) {
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

export default AdditionalFeaturesOptions;
