import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";

const AwardsAndRecognition = (): ReactElement => {
  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1 / 4">
        <Box width="100%" height={300} bg="gray">
          <Typography color="white" variant="h1">
            Awards Placeholder 1
          </Typography>
        </Box>
      </GridItem>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="4/ 10">
        <Box width="100%" height={300} bg="gray">
          <Typography color="white" variant="h1">
            Awards Placeholder 2
          </Typography>
        </Box>
      </GridItem>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="10/ 13">
        <Box width="100%" height={300} bg="gray">
          <Typography color="white" variant="h1">
            Awards Placeholder 3
          </Typography>
        </Box>
      </GridItem>
    </>
  );
};

export default AwardsAndRecognition;
