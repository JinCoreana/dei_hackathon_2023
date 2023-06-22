import React from "react";
import { ReactElement } from "react";
import { GridContainer } from "carbon-react/lib/components/grid";
import AwardsAndRecognition from "./components/AwardsAndRecognition";
import QuickLinks from "./components/QuickLinks";
import NavigationBar from "../../globalComponents/NavigationBar";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";

const HomePage = (): ReactElement => {
  return (
    <>
      <NavigationBar />
      <GridContainer p={0}>
        <ProgressTracker />
        <QuickLinks />
        <VideoCarousel />
        <AwardsAndRecognition />
      </GridContainer>
    </>
  );
};
export default HomePage;
