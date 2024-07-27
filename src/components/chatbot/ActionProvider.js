class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello() {
    const message = this.createChatBotMessage(
      "Hello! How can I assist you with the water supply management system?"
    );
    this.updateChatbotState(message);
  }

  handleWaterSupplyStatus() {
    const message = this.createChatBotMessage(
      "The current water supply status is normal. All areas are receiving water as scheduled."
    );
    this.updateChatbotState(message);
  }

  handleReportLeakage() {
    const message = this.createChatBotMessage(
      "To report a leakage, please call our helpline at [Helpline Number] or use our online reporting form: [Reporting Form Link]."
    );
    this.updateChatbotState(message);
  }

  handleBillingInquiries() {
    const message = this.createChatBotMessage(
      "For billing inquiries, please visit our billing section on the website: [Billing Section Link] or contact our billing department at [Billing Contact Number]."
    );
    this.updateChatbotState(message);
  }

  handleOfflinePayment() {
    const message = this.createChatBotMessage(
      "You can pay your water bill offline at our office located at [Office Address]. Our office hours are from 9 AM to 5 PM, Monday to Friday."
    );
    this.updateChatbotState(message);
  }

  handleWaterUsageTips() {
    const message = this.createChatBotMessage(
      "To save water, consider fixing leaks promptly, using water-efficient fixtures, and practicing mindful water usage. Learn more here: [Water Saving Tips Link]"
    );
    this.updateChatbotState(message);
  }

  handleNewConnection() {
    const message = this.createChatBotMessage(
      "To apply for a new water connection, please fill out the application form available on our website: [New Connection Form Link] or visit our office at [Office Address]."
    );
    this.updateChatbotState(message);
  }

  handleDisconnection() {
    const message = this.createChatBotMessage(
      "To request a disconnection of your water supply, please contact our customer service at [Customer Service Number] or submit a request through our website: [Disconnection Request Link]."
    );
    this.updateChatbotState(message);
  }

  handleQualityCheck() {
    const message = this.createChatBotMessage(
      "Our water quality is regularly monitored to ensure it meets safety standards. For more details, please visit our water quality report page: [Water Quality Report Link]"
    );
    this.updateChatbotState(message);
  }

  handleEmergencyContact() {
    const message = this.createChatBotMessage(
      "For any water supply emergencies, please contact our emergency hotline at [Emergency Hotline Number] immediately."
    );
    this.updateChatbotState(message);
  }

  handleDefault() {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Could you please ask something else?"
    );
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
