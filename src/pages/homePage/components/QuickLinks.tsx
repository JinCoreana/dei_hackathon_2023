import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import firstImage from '../../../images/assests/Rectangle 39.png';
import secondImage from '../../../images/assests/Rectangle 39.png';
import thirdImage from '../../../images/assests/Rectangle 39.png';
import fourthImage from '../../../images/assests/Rectangle 39.png';
import fivethImage from '../../../images/assests/Rectangle 39.png';
import sixImage from '../../../images/assests/Rectangle 39.png';

const QuickLinks = (): ReactElement => {
  const navigateTo = useNavigate();

  const navigationMenu = [
    { srcImage: firstImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    },
    {
      srcImage: secondImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    },
    {
      srcImage: thirdImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    },
    {
      srcImage: fourthImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    },{
      srcImage: fivethImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    },{
      srcImage: sixImage,
      iconImage: firstImage,
      description: "This is the dummy text"
    }
  ];

  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Box width="100%" height={700} bg="brown">
        <Typography color="white" variant="h1">
          Quick links placeholder
        </Typography>
        <Button
          size="large"
          onClick={() => {
            navigateTo("/adjustment_request");
          }}
        >
          Go To Adjustment Request page
        </Button>
      </Box>
      <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          mt={150}
        >
          <Box>
           {
           navigationMenu.map((item) => {
                return (
                  <Box mr={50}>
                    
                      <Typography fontSize="32px" color="white" pt={1}>
                        {item.description}
                      </Typography>
                    
                  </Box>
                );
              })}
            </Box>

          
          

        </Box>
    </GridItem>
  );
};

export default QuickLinks;
