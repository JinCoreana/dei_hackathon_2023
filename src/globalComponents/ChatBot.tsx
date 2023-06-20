import React from "react";
import { ReactElement } from "react";
import Typography from "carbon-react/lib/components/typography";
import Box from "carbon-react/lib/components/box";
const ChatBot = (): ReactElement => {
  return (
    <Box width="200px" height="600px" bg="blue">
      <Typography>Chat Bot</Typography>;
    </Box>
  );
};
export default ChatBot;
