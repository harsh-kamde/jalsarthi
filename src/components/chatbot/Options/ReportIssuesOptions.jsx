// components/Options/ReportIssuesOptions.jsx

import React from "react";
import "./Options.css";
import { createChatBotMessage } from "react-chatbot-kit";

const ReportIssuesOptions = ({ setState }) => {
  const options = [
    {
      text: "Report a Water Leak",
      handler: () =>
        handleReportIssuesResponse(
          "To report a water leak, please provide details here: [Water Leak Report Link]"
        ),
    },
    {
      text: "Report Low Water Pressure",
      handler: () =>
        handleReportIssuesResponse(
          "To report low water pressure, please fill out this form: [Low Pressure Report Link]"
        ),
    },
    {
      text: "Report Contaminated Water",
      handler: () =>
        handleReportIssuesResponse(
          "If you suspect water contamination, report it here: [Contamination Report Link]"
        ),
    },
    {
      text: "Submit a General Complaint",
      handler: () =>
        handleReportIssuesResponse(
          "For general complaints or issues, please submit your details here: [General Complaint Link]"
        ),
    },
  ];

  function handleReportIssuesResponse(response) {
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

export default ReportIssuesOptions;
