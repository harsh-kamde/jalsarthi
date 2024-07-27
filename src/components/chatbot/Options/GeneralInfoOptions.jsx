// components/Options/GeneralInfoOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const GeneralInfoOptions = ({ setState}) => {
  const options = [
    { text: 'Opening Hours', handler: () => handleGeneralInfoResponse('Our opening hours are: Monday to Friday: 8 AM - 10 PM, Saturday and Sunday: 9 AM - 11 PM') },
    { text: 'Location', handler: () => handleGeneralInfoResponse('We are located at [Cafe Address]. Here is a link to our location on Google Maps: [Map Link]') },
    { text: 'Parking Facilities', handler: () => handleGeneralInfoResponse('Yes, we have ample parking space available for our customers.') },
    { text: 'Contact Details', handler: () => handleGeneralInfoResponse('You can contact us at: Phone: [Phone Number], Email: [Email Address]') },
    { text: 'Wi-Fi Availability', handler: () => handleGeneralInfoResponse('Yes, we offer free Wi-Fi for all our customers.') },
    { text: 'Special Events', handler: () => handleGeneralInfoResponse('Yes, we have the following events coming up: [Event 1] on [Date], [Event 2] on [Date]') },
  ];

  function handleGeneralInfoResponse(response) {
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

export default GeneralInfoOptions;
