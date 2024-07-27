// components/Options/FeedbackSupportOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const FeedbackSupportOptions = ({ setState}) => {
  const options = [
    { text: 'Submit Feedback', handler: () => handleFeedbackSupportResponse('We value your feedback. Please submit your comments here: [Feedback Link]') },
    { text: 'Customer Support', handler: () => handleFeedbackSupportResponse('For customer support, please contact us here: [Support Link]') },
    { text: 'Report an Issue', handler: () => handleFeedbackSupportResponse('To report an issue, please provide details here: [Report Issue Link]') },
    { text: 'FAQs', handler: () => handleFeedbackSupportResponse('You can view our frequently asked questions here: [FAQs Link]') },
  ];

  function handleFeedbackSupportResponse(response) {
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

export default FeedbackSupportOptions;
