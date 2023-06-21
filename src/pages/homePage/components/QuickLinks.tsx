import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const QuickLinks = (): ReactElement => {
  const navigateTo = useNavigate();

  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Box width="100%" height={700} bg="brown">
        <Typography color="white" variant="h1">
          Quick links placeholder
        </Typography>
        <Button
          size="large"
          onClick={() => {
            navigateTo("/adjustment_request");
          }}
        >
          Go To Adjustment Request page
        </Button>
      </Box>
    </GridItem>
  );
};

export default QuickLinks;
