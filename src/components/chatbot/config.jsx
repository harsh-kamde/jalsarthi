import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import GeneralInfoOptions from "./Options/GeneralInfoOptions";
import ReportIssuesOptions from "./Options/ReportIssuesOptions";
import BillingAndPaymentsOptions from "./Options/BillingAndPaymentsOptions";
import NewConnectionsOptions from "./Options/NewConnectionsOptions";
import WaterQualityOptions from "./Options/WaterQualityOptions";
import EmergencyServicesOptions from "./Options/EmergencyServicesOptions";
import ConservationTipsOptions from "./Options/ConservationTipsOptions";
import MaintenanceRequestsOptions from "./Options/MaintenanceRequestsOptions";
import FeedbackSupportOptions from "./Options/FeedbackSupportOptions";
import AccountManagementOptions from "./Options/AccountManagementOptions";
import AdditionalFeaturesOptions from "./Options/AdditionalFeaturesOptions";

import Avatar from "./Avatar";

const config = {
  botName: "IndoreWaterBot",
  initialMessages: [
    createChatBotMessage("Hello there! 👋"),
    createChatBotMessage(
      " How can I assist you with your water supply needs today?",
      {
        withAvatar: false,
        delay: 800,
        widget: "options",
      }
    ),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "generalInfoOptions",
      widgetFunc: (props) => <GeneralInfoOptions {...props} />,
    },
    {
      widgetName: "reportIssuesOptions",
      widgetFunc: (props) => <ReportIssuesOptions {...props} />,
    },
    {
      widgetName: "billingAndPaymentsOptions",
      widgetFunc: (props) => <BillingAndPaymentsOptions {...props} />,
    },
    {
      widgetName: "newConnectionsOptions",
      widgetFunc: (props) => <NewConnectionsOptions {...props} />,
    },
    {
      widgetName: "waterQualityOptions",
      widgetFunc: (props) => <WaterQualityOptions {...props} />,
    },
    {
      widgetName: "emergencyServicesOptions",
      widgetFunc: (props) => <EmergencyServicesOptions {...props} />,
    },
    {
      widgetName: "conservationTipsOptions",
      widgetFunc: (props) => <ConservationTipsOptions {...props} />,
    },
    {
      widgetName: "maintenanceRequestsOptions",
      widgetFunc: (props) => <MaintenanceRequestsOptions {...props} />,
    },
    {
      widgetName: "feedbackSupportOptions",
      widgetFunc: (props) => <FeedbackSupportOptions {...props} />,
    },
    {
      widgetName: "accountManagementOptions",
      widgetFunc: (props) => <AccountManagementOptions {...props} />,
    },
    {
      widgetName: "additionalFeaturesOptions",
      widgetFunc: (props) => <AdditionalFeaturesOptions {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "var(--primaryHoverColor)",
    },
    chatButton: {
      backgroundColor: "var(--primaryColor)",
    },
    userMessageBox: {
      backgroundColor: "var(--primaryColor)",
    },
    userText: {
      color: "var(--textColor)",
    },
  },
};

export default config;
