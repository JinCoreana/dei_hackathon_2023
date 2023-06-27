import React, { useContext } from "react";
import { ReactElement } from "react";
import Typography from "carbon-react/lib/components/typography";
import Box from "carbon-react/lib/components/box";
import { GridItem } from "carbon-react/lib/components/grid";
import NavigationBar from "../../globalComponents/NavigationBar";
import NotificationTable from "./components/NotificationTable";
import { GlobalContext } from "../../context/GlobalContext";
import ChatBot from "./components/ChatBot";
const ChatWithUsPage = (): ReactElement => {
  const { chosenApplication, chatBotOpen } = useContext(GlobalContext);
  return (
    <>
      <NavigationBar isNotHomePage />
      {chosenApplication ? (
        <GridItem alignSelf="stretch" justifySelf="stretch">
          <Box display="flex" justifyContent="center" mt={100}>
            <Box>
              <Typography variant="h3" fontSize="24px" mb={2}>
                Your notifications
              </Typography>
              <NotificationTable chosenApplication={chosenApplication} />
            </Box>
            {chatBotOpen && <ChatBot />}
          </Box>
        </GridItem>
      ) : (
        <Typography variant="h3" fontSize="24px" mt={100} ml={100}>
          Please select your application to view notifications
        </Typography>
      )}
    </>
  );
};
export default ChatWithUsPage;
