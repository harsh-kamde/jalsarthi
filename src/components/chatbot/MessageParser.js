// components/MessageParser.jsx

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.keywords = {
      greeting: /(hello|hi|hey)/i,
      location:
        /(office location|office address|where are you located|our location)/i,
      contact: /(contact details|phone number|email|contact us)/i,
      waterQuality:
        /(water quality|water reports|contaminants|water testing|purification methods|water issues)/i,
      billing: /(billing|bill|payment|invoice|account statement)/i,
      maintenance:
        /(maintenance request|repair request|water supply issue|pipeline issue|maintenance)/i,
      newConnection:
        /(new connection|apply for new water connection|water service application)/i,
      conservation:
        /(water conservation|save water|conservation tips|water-efficient practices)/i,
      emergency:
        /(emergency services|emergency contact|urgent issue|water emergency)/i,
      feedback: /(feedback|complaints|suggestions|review)/i,
      support: /(support|customer support|assistance|help)/i,
    };
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Check for greetings
    if (this.keywords.greeting.test(lowerCaseMessage)) {
      this.actionProvider.handleHello();
      return;
    }

    // Check for other categories using keywords
    for (const category in this.keywords) {
      if (this.keywords[category].test(lowerCaseMessage)) {
        switch (category) {
          case "location":
            this.actionProvider.handleLocation();
            return;
          case "contact":
            this.actionProvider.handleContactDetails();
            return;
          case "waterQuality":
            this.actionProvider.handleWaterQuality();
            return;
          case "billing":
            this.actionProvider.handleBilling();
            return;
          case "maintenance":
            this.actionProvider.handleMaintenanceRequests();
            return;
          case "newConnection":
            this.actionProvider.handleNewConnection();
            return;
          case "conservation":
            this.actionProvider.handleConservationTips();
            return;
          case "emergency":
            this.actionProvider.handleEmergencyServices();
            return;
          case "feedback":
            this.actionProvider.handleFeedback();
            return;
          case "support":
            this.actionProvider.handleSupport();
            return;
          default:
            this.actionProvider.handleDefault();
            return;
        }
      }
    }

    this.actionProvider.handleDefault();
  }
}

export default MessageParser;
