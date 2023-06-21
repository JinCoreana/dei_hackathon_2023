import React from "react";
import { ReactElement } from "react";
import { GridContainer } from "carbon-react/lib/components/grid";
import AwardsAndRecognition from "./components/AwardsAndRecognition";
import VideoCarrousel from "./components/VideoCarrousel";
import QuickLinks from "./components/QuickLinks";
import ProgressTracker from "./components/ProgressTracker";
import NavigationBar from "../../globalComponents/NavigationBar";

const HomePage = (): ReactElement => {
  return (
    <>
      <NavigationBar />
      <GridContainer>
        <ProgressTracker />
        <QuickLinks />
        <VideoCarrousel />
        <AwardsAndRecognition />
      </GridContainer>
    </>
  );
};
export default HomePage;
