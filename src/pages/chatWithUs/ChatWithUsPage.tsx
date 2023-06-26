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
      <GridItem alignSelf="stretch" justifySelf="stretch">
        <Box display="flex" justifyContent="center" mt={100}>
          <NotificationTable chosenApplication={chosenApplication} />
          {chatBotOpen && <ChatBot />}
        </Box>
      </GridItem>
    </>
  );
};
export default ChatWithUsPage;
