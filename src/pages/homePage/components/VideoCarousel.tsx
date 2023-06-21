import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Icon from "carbon-react/lib/components/icon";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement, useState } from "react";
import "./VideoCarousel.css"

interface VideoCarouselProps {
  videos: string[];
  captions: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, captions }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handlePrevious = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <GridItem alignSelf="stretch" justifySelf="stretch"  align-items="center" justify-items="center">
      <Box width="100%" height={"100%"} bg="gray">       
        <div className="mainContainer" >
            <div>
                <Typography className="carouselHeading" variant="h1">Success Stories:</Typography>
            </div>
            
            <div className="containerOne">
              <div className="leftShiftButton">
                    <Box ml={1} key={`icon-${"chevron_left"}`} onClick={handlePrevious}>
                        <Icon ml={1} type={"chevron_left"} fontSize="large" />
                    </Box>
              </div>                       
            
              <div className="carouselContainer">                        
                <div>
                    <iframe className="videoFrame" src={videos[currentVideoIndex]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex]}</Typography>
                </div>
                
                    
                <div>
                    <iframe className="videoFrame" src={videos[currentVideoIndex+1]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+1]}</Typography>
                </div> 

                <div>
                    <iframe className="videoFrame" src={videos[currentVideoIndex+2]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>       
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+2]}</Typography>
                </div>  
              </div>
            
              <div className="rightShiftButton">
                  <Box mr={1} key={`icon-${"chevron_right"}`} onClick={handleNext}>
                      <Icon mr={1} type={"chevron_right"} fontSize="large" />
                  </Box>
              </div>
                
            </div>                
            
        </div>
      </Box>
    </GridItem>
  );
};
export default VideoCarousel;
