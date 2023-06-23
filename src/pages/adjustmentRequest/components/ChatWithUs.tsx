import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import chatIcon from '../../../images/assests/MicrosoftTeams-image (16) 3.png'
const ChatWithUs = (): ReactElement => {
  const navigateTo = useNavigate();

  const chatToUs = [
    {
      bgColor: "#00A65C",
      iconImage: chatIcon,
      title: "Chat to us",
      subtitle:"(Any questions we can help with)",
      href: "/chat_with_us",
    }
  ];

  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">        
        
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          bg="#D9D9D9"
        >
          {chatToUs.map((item) => {
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
                  borderRadius="borderRadius100"
                  onClick={() => (window.location.href = item.href)}
                >
                  
                  <Image
                    width={75}
                    height={75}
                    src={item.iconImage}
                    alt="Sage won best compnay culture and best compnay work-life balance awards in 2021"
                  />
                  <Typography color="white" variant="h4" mt={2}>
                    {item.title}
                  </Typography>
                  <Typography color="white" variant="h4" mt={2}>
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

export default ChatWithUs;
