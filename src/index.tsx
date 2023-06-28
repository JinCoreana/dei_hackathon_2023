import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import { sageTheme } from "carbon-react/lib/style/themes";
import HomePage from "./pages/homePage/HomePage";
import AccommodationRequestPage from "./pages/adjustmentRequest/AdjustmentRequestPage";
import ChatWithUsPage from "./pages/chatWithUs/ChatWithUsPage";
import GlobalStyle from "carbon-react/lib/style/global-style";
import "carbon-react/lib/style/fonts.css";
import CvAnonymisationPage from "./pages/cvAnonymisation/CvAnonymisationPage";

import { GlobalContextProvider } from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <CarbonProvider theme={sageTheme} validationRedesignOptIn>
      <GlobalContextProvider>
        <Router basename="/dei_hackathon_2023/">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/adjustment_request"
              element={<AccommodationRequestPage />}
            />
            <Route path="/chat_with_us" element={<ChatWithUsPage />} />
            <Route path="/cv_anonymisation" element={<CvAnonymisationPage />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </CarbonProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
