// components/Options/SocialMediaOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const SocialMediaOptions = ({ setState}) => {
  const options = [
    { text: 'Follow Us on Instagram', handler: () => handleSocialMediaResponse('Follow us on Instagram here: [Instagram Link]') },
    { text: 'Join Our Community', handler: () => handleSocialMediaResponse('Join our community for the latest updates: [Community Link]') },
    { text: 'Share Your Experience', handler: () => handleSocialMediaResponse('Share your experience with us on social media: [Share Link]') },
    { text: 'View Social Media Feeds', handler: () => handleSocialMediaResponse('Check out our latest social media posts here: [Social Media Feeds Link]') },
  ];

  function handleSocialMediaResponse(response) {
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

export default SocialMediaOptions;
