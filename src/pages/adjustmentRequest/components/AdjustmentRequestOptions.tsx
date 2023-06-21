import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";

const AdjustmentRequestOptions = (): ReactElement => {
  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Box width="100%" height={770} bg="gray">
        <Typography color="white" variant="h1">
          AdjustmentRequestOptions
        </Typography>
      </Box>
    </GridItem>
  );
};

export default AdjustmentRequestOptions;
