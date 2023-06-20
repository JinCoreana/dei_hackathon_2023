import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AccommodationRequestPage from "./pages/accommodationRequest/AccommodationRequestPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/accommodation_request"
          element={<AccommodationRequestPage />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
