import React from "react";
import { ReactElement } from "react";
import { GridContainer } from "carbon-react/lib/components/grid";
import AwardsAndRecognition from "./components/AwardsAndRecognition";
import VideoCarousel from "./components/VideoCarouselCarbon";
import QuickLinks from "./components/QuickLinks";
import ProgressTracker from "./components/ProgressTracker";
import NavigationBar from "../../globalComponents/NavigationBar";

const videosForCarousel : string[] = [
  'https://player.vimeo.com/video/772034312?h=041fdb7692&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034517?h=c08596b578&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034034?h=46f960584c&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034312?h=041fdb7692&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034517?h=c08596b578&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034034?h=46f960584c&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034312?h=041fdb7692&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034517?h=c08596b578&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/772034034?h=46f960584c&title=0&byline=0&portrait=0',
];

const captionsForCarousel : string[] = [
  'Amanda Cusdin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Elisa Moscolin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Steve Hare, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Amanda Cusdin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Elisa Moscolin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Steve Hare, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Amanda Cusdin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Elisa Moscolin, Chief People Officer, Sustainibility & Society Executive Sponsor',
  'Steve Hare, Chief People Officer, Sustainibility & Society Executive Sponsor',
];

const HomePage = (): ReactElement => {
  return (
    <>
      <NavigationBar />
      <GridContainer>
        <ProgressTracker />
        <QuickLinks />
        <VideoCarousel videos={videosForCarousel}
                      captions={captionsForCarousel}/>
        <AwardsAndRecognition />
      </GridContainer>
    </>
  );
};
export default HomePage;
