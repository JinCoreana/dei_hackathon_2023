import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import { GridContainer, GridItem } from "carbon-react/lib/components/grid";
import firstIcon from '../../../images/assests/MicrosoftTeams-image (18) 2.png'
import fivthIcon from '../../../images/assests/MicrosoftTeams-image (15) 2.png'
import sixthIcon from '../../../images/assests/MicrosoftTeams-image (16) 3.png'
import fourthIcon from '../../../images/assests/MicrosoftTeams-image (17) 2.png'
import secondIcon from '../../../images/assests/MicrosoftTeams-image (19) 2.png'
import thirdIcon from '../../../images/assests/image 20.png'
const QuickLinks = (): ReactElement => {
  

  const quicklinkGrid = [
    { bgColor: "#000000",
      iconImage: firstIcon,
      title: "My Applications",
      subtitle: "Review all your Sage applications and documents shared",
      href:"/"
    },
    {
      bgColor: "#31B67A",
      iconImage: secondIcon,
      title: "What to Expect",
      subtitle: "Information to put you at ease",
      href:"/"
    },
    {
      bgColor: "#00293F",
      iconImage: thirdIcon,
      title: "Help me to succeed",
      subtitle: "Preparation resources",
      href:"/"
    },
    {
      bgColor: "#00293F",
      iconImage: fourthIcon,
      title: "Request an Adjustment",
      subtitle: "What do you need to thrive",
      href:"/"
    },{
      bgColor: "#000000",
      iconImage: fivthIcon,
      title: "Find a Mentor/Buddy",
      subtitle: "Get support from a Sage Colleagues to help you succeed",
      href:"/"
    },{
      bgColor: "#00A65C",
      iconImage: sixthIcon,
      title: "Chat to Us",
      subtitle: "Keep track of important notifications or any questions we can help you with",
      href:"/"
    }
  ];

  return (
    <>

    <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13"
    >
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      >

        
            {
              quicklinkGrid.map((item) => {
                return (
                  <>
                   <Box
                    width={461}
                    height={221}
                    bg={item.bgColor}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    m={1}
                    borderRadius = "borderRadius100"
                    >
                  <Image
                    width={75}
                    height={75}
                    src={item.iconImage}
                    alt="Sage won best compnay culture and best compnay work-life balance awards in 2021"
                    />
                    <Typography color="white" variant="h4" mt={2}
                    onClick={() => (window.location.href = item.href)}>
                      {item.title}
                    </Typography>
                    <Typography color="white" variant="p">
                      {item.subtitle}
                    </Typography>
                    </Box>
                    </>
                    );
                    
                  })}
          


          
    </Box>
    </GridItem>
</>
  );
};

export default QuickLinks;
