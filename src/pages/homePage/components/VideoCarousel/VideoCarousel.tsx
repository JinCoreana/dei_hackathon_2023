import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import { ReactElement } from "react";
import { Carousel } from "carbon-react/lib/components/carousel";
import { videosForCarousel } from "./videos/videos";
import VideoCard from "./components/VideoCard";
import SectionTitle from "../../../../globalComponents/SectionTitle";

const VideoCarousel = (): ReactElement => {
  return (
    <GridItem
      alignSelf="stretch"
      justifySelf="stretch"
      align-items="center"
      justify-items="center"
    >
      <SectionTitle title="Success Stories" />
      <Carousel enableSlideSelector={false}>
        {videosForCarousel.map((video) => {
          return <VideoCard url={video.url} title={video.title} />;
        })}
      </Carousel>
    </GridItem>
  );
};
export default VideoCarousel;
