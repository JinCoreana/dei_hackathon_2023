import React, { useState } from "react";
import { ReactElement } from "react";
import Typography from "carbon-react/lib/components/typography";
import Button from "carbon-react/lib/components/button";
import { Link } from "react-router-dom";
import ChatBot from "../../globalComponents/ChatBot";

const AccommodationRequestPage = (): ReactElement => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  return (
    <>
      <Typography variant="h1">Accommodation Request Page</Typography>
      <Button>
        <Link to="/">Go Back to Homepage</Link>
      </Button>
      <Button
        onClick={() => {
          setIsChatBotOpen(!isChatBotOpen);
        }}
      >
        {isChatBotOpen ? "Close Chatbot" : "Open Chatbot"}
      </Button>
      {isChatBotOpen && <ChatBot />}
    </>
  );
};
export default AccommodationRequestPage;
