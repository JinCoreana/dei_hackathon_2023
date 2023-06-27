import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import chatIcon from "../../../assets/images/chat.png";
const ChatWithUs = (): ReactElement => {
  const navigateTo = useNavigate();

  const chatToUs = [
    {
      bgColor: "#007E45",
      iconImage: chatIcon,
      title: "Chat to us",
      subtitle: "(Any questions we can help with)",
      href: "/chat_with_us",
    },
  ];

  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          flexDirection="column"
          bg="#D9D9D9"
        >
          <Typography color="black" fontSize="28px" pt="2rem" lineHeight="32px">
            Is there anything else we can do? Get in touch below to ask us any
            questions.
          </Typography>
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
                  m={3}
                  borderRadius="borderRadius100"
                  style={{ cursor: "pointer" }}
                  onClick={() => (window.location.href = item.href)}
                >
                  <Image
                    width={75}
                    height={75}
                    src={item.iconImage}
                    alt="Get in touch"
                  />
                  <Typography color="white" variant="h3" mt={2}>
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
