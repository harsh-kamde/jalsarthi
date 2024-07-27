import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Shared/Header/Header";
import About from "../components/Home/About";
import Footer from "../components/Shared/Footer/Footer";
import TopSlider from "../components/Home/TopSlider";
import HeroSection from "../components/Home/HeroSection";
import FAQs from "../components/Home/FAQs";
import OurChefs from "../components/Home/OurChefs";
import ChatbotWidget from "../components/chatbot/ChatbotWidget";
import { StoreContext } from "../context/StoreContext";
StoreContext;

const HomePage = () => {
  const [category, setCategory] = useState("All");

  const { setIsOfflineOrder, token } = useContext(StoreContext);

  useEffect(() => {
    setIsOfflineOrder(false);
  }, [token]);

  return (
    <>
      <Header />
      <TopSlider />
      <HeroSection />
      <About />
      <OurChefs />
      <FAQs />
      <Footer />
      {/* <ChatbotWidget /> */}
    </>
  );
};

export default HomePage;
