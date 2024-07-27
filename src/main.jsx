import React from "react";
import { Helmet } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#007BFF", // Change the primary color if needed
          },
        }}
      >
        <HelmetProvider>
          {/* For SEO */}
          <Helmet>
            <meta charSet="utf-8" />
            <link rel="icon" href="/images/icon.webp" />
            <title>JalSaarthi - Advanced Water Supply Management System</title>
            <meta
              name="title"
              content="JalSaarthi - Advanced Water Supply Management System"
            />
            <meta
              name="description"
              content="JalSaarthi is a cutting-edge water supply management system designed to optimize water distribution and usage tracking. Our system provides real-time monitoring, leakage detection, and equitable water distribution to ensure efficient and sustainable water management."
            />
            <meta
              name="keywords"
              content="Water supply management, Water distribution system, Leakage detection, Water conservation, JalSaarthi"
            />
            <link rel="canonical" href="https://www.jalsaarthi.com/" />
          </Helmet>

          <App />
        </HelmetProvider>
      </ConfigProvider>
    </StoreContextProvider>
  </BrowserRouter>
);
