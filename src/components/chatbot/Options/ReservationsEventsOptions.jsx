// components/Options/ReservationsEventsOptions.jsx

import React from 'react';
import './Options.css';
import { createChatBotMessage } from "react-chatbot-kit";

const ReservationsEventsOptions = ({ setState}) => {
  const options = [
    { text: 'Make a Reservation', handler: () => handleReservationsEventsResponse('You can make a reservation here: [Reservation Link]') },
    { text: 'Event Booking', handler: () => handleReservationsEventsResponse('You can book an event here: [Event Booking Link]') },
    { text: 'View Upcoming Events', handler: () => handleReservationsEventsResponse('You can view our upcoming events here: [Upcoming Events Link]') },
    { text: 'Cancel Reservation', handler: () => handleReservationsEventsResponse('To cancel a reservation, please provide your reservation details here: [Cancellation Link]') },
  ];

  function handleReservationsEventsResponse(response) {
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

export default ReservationsEventsOptions;
