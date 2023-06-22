import React from "react";
import { ReactElement } from "react";
import { GridContainer } from "carbon-react/lib/components/grid";
import AwardsAndRecognition from "./components/AwardsAndRecognition";

import QuickLinks from "./components/QuickLinks";
import ProgressTracker from "./components/ProgressTracker";
import NavigationBar from "../../globalComponents/NavigationBar";
// import VideoCarousel from "./components/VideoCarousel/VideoCarousel";

const HomePage = (): ReactElement => {
  return (
    <>
      <NavigationBar />
      <GridContainer>
        <ProgressTracker />
        <QuickLinks />
        {/* <VideoCarousel /> */}
        <AwardsAndRecognition />
      </GridContainer>
    </>
  );
};
export default HomePage;
