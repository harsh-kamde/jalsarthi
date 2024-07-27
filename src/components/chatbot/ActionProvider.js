// ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello() {
    const message = this.createChatBotMessage("Hello! How can I help you?");
    this.updateChatbotState(message);
  }

  handleOpeningHours() {
    const message = this.createChatBotMessage(`Our opening hours are:
      - Monday to Friday: 8 AM - 10 PM
      - Saturday and Sunday: 9 AM - 11 PM`);
    this.updateChatbotState(message);
  }

  handleLocation() {
    const message = this.createChatBotMessage(`We are located at [Cafe Address]. Here is a link to our location on Google Maps: [Map Link]`);
    this.updateChatbotState(message);
  }

  handleParking() {
    const message = this.createChatBotMessage("Yes, we have ample parking space available for our customers.");
    this.updateChatbotState(message);
  }

  handleContactDetails() {
    const message = this.createChatBotMessage(`You can contact us at:
      - Phone: [Phone Number]
      - Email: [Email Address]`);
    this.updateChatbotState(message);
  }

  handleWiFi() {
    const message = this.createChatBotMessage("Yes, we offer free Wi-Fi for all our customers.");
    this.updateChatbotState(message);
  }

  handleSpecialEvents() {
    const message = this.createChatBotMessage(`We have the following events coming up:
      - [Event 1] on [Date]
      - [Event 2] on [Date]`);
    this.updateChatbotState(message);
  }

  handleMenu() {
    const message = this.createChatBotMessage("You can view our complete menu here: [Menu Link]");
    this.updateChatbotState(message);
  }

  handleSpecialDietaryOptions() {
    const message = this.createChatBotMessage("Yes, we have a variety of vegetarian, vegan, and gluten-free options available on our menu.");
    this.updateChatbotState(message);
  }

  handleSpecials() {
    const message = this.createChatBotMessage(`Today's specials are:
      - [Special Dish 1]
      - [Special Dish 2]`);
    this.updateChatbotState(message);
  }

  handleDrinkMenu() {
    const message = this.createChatBotMessage("Sure! You can view our drink menu here: [Drink Menu Link]");
    this.updateChatbotState(message);
  }

  handlePickupOrder() {
    const message = this.createChatBotMessage("You can place a pickup order through our website: [Pickup Order Link] or call us at [Phone Number].");
    this.updateChatbotState(message);
  }

  handleDeliveryOrder() {
    const message = this.createChatBotMessage("You can place a delivery order through our website: [Delivery Order Link] or via our delivery partners: [Delivery Partner Names].");
    this.updateChatbotState(message);
  }

  handleDiscountsPromotions() {
    const message = this.createChatBotMessage(`Yes, we currently have the following promotions:
      - [Discount 1]
      - [Discount 2]`);
    this.updateChatbotState(message);
  }

  handleReservation() {
    const message = this.createChatBotMessage("You can make a reservation through our website: [Reservation Link] or call us at [Phone Number].");
    this.updateChatbotState(message);
  }

  handleLargeGroupReservation() {
    const message = this.createChatBotMessage("Yes, we can accommodate large groups. Please provide the number of guests and the date and time for the reservation.");
    this.updateChatbotState(message);
  }

  handlePrivateEvents() {
    const message = this.createChatBotMessage("Yes, we do! You can book our event space for private parties. Please fill out the event booking form here: [Event Booking Link]");
    this.updateChatbotState(message);
  }

  handleEventBookingFee() {
    const message = this.createChatBotMessage("Yes, there is a booking fee depending on the size and duration of the event. Please contact us for more details.");
    this.updateChatbotState(message);
  }

  handleRescheduleCancelReservation() {
    const message = this.createChatBotMessage("Yes, you can reschedule or cancel your reservation through our website: [Reschedule/Cancel Link] or by calling us at [Phone Number].");
    this.updateChatbotState(message);
  }

  handleLoyaltyProgram() {
    const message = this.createChatBotMessage("Our loyalty program allows you to earn points for every purchase, which you can redeem for discounts and special offers.");
    this.updateChatbotState(message);
  }

  handleEarnPoints() {
    const message = this.createChatBotMessage("You earn points by making purchases at Sky Hut Cafe. Every [Amount] spent earns you [Number] points.");
    this.updateChatbotState(message);
  }

  handleRedeemPoints() {
    const message = this.createChatBotMessage("You can redeem your points at checkout or through our rewards portal: [Rewards Portal Link]");
    this.updateChatbotState(message);
  }

  handlePointBalance() {
    const message = this.createChatBotMessage("You can check your points balance in your account dashboard: [Account Dashboard Link]");
    this.updateChatbotState(message);
  }

  handleCheckBalance() {
    const message = this.createChatBotMessage("You can check your balance in your account dashboard: [Account Dashboard Link]");
    this.updateChatbotState(message);
  }

  handlePaymentMethods() {
    const message = this.createChatBotMessage("We accept cash, credit/debit cards, and digital wallets like [Digital Wallet Names].");
    this.updateChatbotState(message);
  }

  handlePayOnline() {
    const message = this.createChatBotMessage("Yes, you can pay online through our website when placing an order or making a reservation.");
    this.updateChatbotState(message);
  }

  handleMinimumOrderAmount() {
    const message = this.createChatBotMessage("Yes, there is a minimum order amount of [Amount] for delivery.");
    this.updateChatbotState(message);
  }

  handlePricing() {
    const message = this.createChatBotMessage("The pricing varies depending on the menu items and special offers available.");
    this.updateChatbotState(message);
  }

  handleDiscountCode() {
    const message = this.createChatBotMessage("You can enter a discount code during checkout to apply discounts or special offers.");
    this.updateChatbotState(message);
  }

  handleRefundPolicy() {
    const message = this.createChatBotMessage("Our refund policy allows refunds within [Time Frame] of the purchase date under certain conditions. Please contact us for more details.");
    this.updateChatbotState(message);
  }

  handleCustomizeOrder() {
    const message = this.createChatBotMessage("Yes, you can customize your order. Please specify your preferences when placing your order.");
    this.updateChatbotState(message);
  }

  handleDietaryRestrictions() {
    const message = this.createChatBotMessage("Yes, we accommodate various dietary restrictions. Please inform us of any specific requirements.");
    this.updateChatbotState(message);
  }

  handleSpecificTable() {
    const message = this.createChatBotMessage("Yes, you can request a specific table or area when making a reservation, and we will do our best to accommodate you.");
    this.updateChatbotState(message);
  }

  handleSpecialMenu() {
    const message = this.createChatBotMessage("Yes, we can create a special menu for your event. Please contact us to discuss your requirements.");
    this.updateChatbotState(message);
  }

  handleFeedbackReview() {
    const message = this.createChatBotMessage("You can leave feedback or a review on our website: [Feedback Link] or on our social media pages: [Social Media Links]");
    this.updateChatbotState(message);
  }

  handleCustomerSupport() {
    const message = this.createChatBotMessage("You can contact our customer support team at [Support Email] or call us at [Support Phone Number].");
    this.updateChatbotState(message);
  }

  handleOrderIssue() {
    const message = this.createChatBotMessage("We apologize for the inconvenience. Please contact our support team at [Support Email] or [Support Phone Number] for assistance.");
    this.updateChatbotState(message);
  }

  handleReportProblem() {
    const message = this.createChatBotMessage("Please report any issues with the website to [Website Support Email].");
    this.updateChatbotState(message);
  }

  handleSocialMedia() {
    const message = this.createChatBotMessage("You can follow us on social media here:");
    this.setState((prevState) => ({
      ...prevState,
      messages: [
        ...prevState.messages,
        message,
        {
          type: 'socialMediaOptions',
          options: [
            { text: 'Follow Us on Instagram', handler: () => this.handleFollowOnInstagram() },
            { text: 'Join Our Community', handler: () => this.handleJoinCommunity() },
            { text: 'Share Your Experience', handler: () => this.handleShareExperience() },
            { text: 'View Social Media Feeds', handler: () => this.handleViewSocialMediaFeeds() },
          ],
        },
      ],
    }));
  }

  handleFollowOnInstagram() {
    const message = this.createChatBotMessage("Follow us on Instagram here: [Instagram Link]");
    this.updateChatbotState(message);
  }

  handleJoinCommunity() {
    const message = this.createChatBotMessage("Join our community for the latest updates: [Community Link]");
    this.updateChatbotState(message);
  }

  handleShareExperience() {
    const message = this.createChatBotMessage("Share your experience with us on social media: [Share Link]");
    this.updateChatbotState(message);
  }

  handleViewSocialMediaFeeds() {
    const message = this.createChatBotMessage("Check out our latest social media posts here: [Social Media Feeds Link]");
    this.updateChatbotState(message);
  }

  handleDiscountForInstagramFollow() {
    const message = this.createChatBotMessage("You can get a discount by following us on Instagram and showing the follow confirmation at checkout.");
    this.updateChatbotState(message);
  }

  handle360View() {
    const message = this.createChatBotMessage("You can view a 360-degree tour of our hut here: [360 View Link]");
    this.updateChatbotState(message);
  }

  handleGalleryImages() {
    const message = this.createChatBotMessage("You can find the latest gallery images on our website: [Gallery Link]");
    this.updateChatbotState(message);
  }

  handleQRCode() {
    const message = this.createChatBotMessage("Scan this QR code to place an offline order: [QR Code Link]");
    this.updateChatbotState(message);
  }

  handleCancellationPolicy() {
    const message = this.createChatBotMessage("Our cancellation policy allows you to cancel your booking up to [Time Frame] before the reservation time without any charges. After that, a cancellation fee may apply.");
    this.updateChatbotState(message);
  }

  handleDefault() {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you please ask something else?");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
