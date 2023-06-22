import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import { ReactElement } from "react";
import Image from "carbon-react/lib/components/image";
import LeftAwards from "../../../assets/images/leftAwards.png";
import RightAwards from "../../../assets/images/rightAwards.png";
import CentreRecognition from "../../../assets/images/centreRecongnition.png";

const AwardsAndRecognition = (): ReactElement => {
  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch">
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          mt={150}
        >
          <Image
            width={400}
            height="100%"
            src={LeftAwards}
            alt="Sage won best company culture and best company work-life balance awards in 2021"
          />

          <Image
            width={500}
            height="100%"
            src={CentreRecognition}
            alt="Sage was chosen as the best place to work in 2022 by Glassdoor"
          />

          <Image
            width={400}
            height="100%"
            src={RightAwards}
            alt="Sage won best company for diversity and best company for women in 2021"
          />
        </Box>
      </GridItem>
    </>
  );
};

export default AwardsAndRecognition;
