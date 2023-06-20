import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import { sageTheme } from "carbon-react/lib/style/themes";
import HomePage from "./pages/homePage/HomePage";
import AccommodationRequestPage from "./pages/accommodationRequest/AccommodationRequestPage";
import "carbon-react/lib/style/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <CarbonProvider theme={sageTheme} validationRedesignOptIn>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/accommodation_request"
            element={<AccommodationRequestPage />}
          />
        </Routes>
      </Router>
    </CarbonProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
