import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatWithUs = (): ReactElement => {
  const navigateTo = useNavigate();

  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Box width="100%" height={350} bg="brown">
        <Typography color="white" variant="h1">
          Chat With Us Placeholder
        </Typography>
        <Button
          onClick={() => {
            navigateTo("/chat_with_us");
          }}
        >
          ChatWithUs
        </Button>
      </Box>
    </GridItem>
  );
};

export default ChatWithUs;
