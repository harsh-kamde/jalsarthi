// components/Options/LoyaltyRewardsOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const LoyaltyRewardsOptions = ({ setState}) => {
  const options = [
    { text: 'Earn Points', handler: () => handleLoyaltyRewardsResponse('You can earn points by making purchases and engaging with our community. Learn more here: [Loyalty Program Link]') },
    { text: 'Redeem Points', handler: () => handleLoyaltyRewardsResponse('You can redeem your points for discounts and special offers. Check your balance and redeem points here: [Redeem Points Link]') },
    { text: 'Check Point Balance', handler: () => handleLoyaltyRewardsResponse('Check your current point balance here: [Point Balance Link]') },
    { text: 'Special Offers', handler: () => handleLoyaltyRewardsResponse('We have special offers for our loyal customers. View current offers here: [Special Offers Link]') },
  ];

  function handleLoyaltyRewardsResponse(response) {
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

export default LoyaltyRewardsOptions;
