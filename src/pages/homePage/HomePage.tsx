import React from "react";
import { ReactElement } from "react";
import { GridContainer } from "carbon-react/lib/components/grid";
import AwardsAndRecognition from "./components/AwardsAndRecognition";
import QuickLinks from "./components/QuickLinks";
import NavigationBar from "../../globalComponents/NavigationBar";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";
import { GlobalContextProvider } from "../../context/GlobalContext";
import Toaster from "../../globalComponents/Toaster";

const HomePage = (): ReactElement => {
  return (
    <>
      <GlobalContextProvider>
        <GridContainer p={0}>
          <Toaster />
          <NavigationBar />
          <ProgressTracker />
          <QuickLinks />
          <VideoCarousel />
          <AwardsAndRecognition />
        </GridContainer>
      </GlobalContextProvider>
    </>
  );
};
export default HomePage;
