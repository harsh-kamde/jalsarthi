// components/Options/SpecialRequestsOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const SpecialRequestsOptions = ({ setState }) => {
  const options = [
    { text: 'Dietary Requests', handler: () => handleSpecialRequestsResponse('We accommodate various dietary requests. Please specify your needs when placing an order or making a reservation: [Dietary Requests Link]') },
    { text: 'Seating Preferences', handler: () => handleSpecialRequestsResponse('You can specify your seating preferences when making a reservation: [Seating Preferences Link]') },
    { text: 'Event Customization', handler: () => handleSpecialRequestsResponse('For event customization options, please contact us here: [Event Customization Link]') },
    { text: 'Accessibility Needs', handler: () => handleSpecialRequestsResponse('We are committed to accessibility. Please let us know your needs: [Accessibility Needs Link]') },
  ];

  function handleSpecialRequestsResponse(response) {
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

export default SpecialRequestsOptions;
