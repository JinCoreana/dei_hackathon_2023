import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Icon from "carbon-react/lib/components/icon";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement, useState } from "react";
import "./VideoCarousel.css"
import { Carousel, Slide } from "carbon-react/lib/components/carousel";

interface VideoCarouselProps {
  videos: string[];
  captions: string[];
}

const VideoCarouselCarbon: React.FC<VideoCarouselProps> = ({ videos, captions }) => {
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
            
          <div className="carouselContainer"> 
            
            <Carousel enableSlideSelector={true} enableNextButton={true} enablePreviousButton={true}>
              <Slide>
                <Box
                   
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                 
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex+1]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+1]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                      <iframe className="videoFrame" src={videos[currentVideoIndex+2]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>       
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+2]}</Typography>
                </Box>


              </Slide>

              <Slide>
                <Box
                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex+1]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+1]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                      <iframe className="videoFrame" src={videos[currentVideoIndex+2]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>       
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+2]}</Typography>
                </Box>


              </Slide>

              <Slide>
                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                    <iframe className="videoFrame" src={videos[currentVideoIndex+1]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+1]}</Typography>
                </Box>

                <Box                  
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  
                  >
                      <iframe className="videoFrame" src={videos[currentVideoIndex+2]} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>       
                    <Typography className="videoCaption" variant="h5">{captions[currentVideoIndex+2]}</Typography>
                </Box>


              </Slide>
              
            </Carousel>    
                
              
            
             
                
          </div>
          
        </div>
      </Box>
    </GridItem>
  );
};
export default VideoCarouselCarbon;
