import { GridItem } from "carbon-react/lib/components/grid";
import { ReactElement } from "react";
import { Carousel } from "carbon-react/lib/components/carousel";
import { videosForCarousel } from "./videos/videos";
import VideoCard from "./components/VideoCard";
import SectionTitle from "../../../../globalComponents/SectionTitle";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Box from "carbon-react/lib/components/box/box.component";

const VideoCarousel = (): ReactElement => {
  return (
    <GridItem
      alignSelf="stretch"
      justifySelf="stretch"
      align-items="center"
      justify-items="center"
    >
      <Box
        bg="#E6EBED"
        height={650}
        mt={100}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <SectionTitle title="Success Stories" />
        <Typography
          variant="h4"
          fontSize="24px"
          lineHeight="30px"
          ml={100}
          mb={50}
        >
          Watch testimonials from Sage colleagues to find out more about life at
          Sage and how you can thrive at Sage.
        </Typography>
        <Carousel enableSlideSelector={false}>
          {videosForCarousel.map((video) => {
            return <VideoCard url={video.url} title={video.title} />;
          })}
        </Carousel>
      </Box>
    </GridItem>
  );
};
export default VideoCarousel;
