import React from "react";
import { ReactElement } from "react";
import Typography from "carbon-react/lib/components/typography";
import Box from "carbon-react/lib/components/box";
import { GridItem } from "carbon-react/lib/components/grid";
import NavigationBar from "../../globalComponents/NavigationBar";
const ChatBotPage = (): ReactElement => {
  return (
    <>
      <NavigationBar isNotHomePage />
      <GridItem alignSelf="stretch" justifySelf="stretch">
        <Box width="200px" height="600px" bg="blue">
          <Typography>Chat Bot</Typography>;
        </Box>
      </GridItem>
    </>
  );
};
export default ChatBotPage;
