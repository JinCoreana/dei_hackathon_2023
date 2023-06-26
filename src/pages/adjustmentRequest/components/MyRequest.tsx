import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import chatIcon from "../../../assets/images/chat.png";
import SectionTitle from "../../../globalComponents/SectionTitle";
import {
  Card,
  CardRow,
  CardFooter,
  CardColumn,
} from "carbon-react/lib/components/card";
import Heading from "carbon-react/lib/components/heading";
import Icon from "carbon-react/lib/components/icon";
import Link from "carbon-react/lib/components/link";
import Pill from "carbon-react/lib/components/pill";
const MyRequest = (): ReactElement => {
  const navigateTo = useNavigate();

  const chatToUs = [
    {
      bgColor: "#007E45",
      iconImage: chatIcon,
      title: "Chat to us",
      subtitle: "(Any questions we can help with)",
      href: "/chat_with_us",
    },
    {
      bgColor: "#007E45",
      iconImage: chatIcon,
      title: "Chat to us",
      subtitle: "(Any questions we can help with)",
      href: "/chat_with_us",
    },
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
        <SectionTitle title="Interview adjustments" />
        <Typography
          variant="h3"
          alignItems="left"
          ml={100}
          mb={20}
          fontSize="28px"
        >
          You have submitted the following adjustment requests:
        </Typography>
        <Typography
          fontWeight="strong"
          alignItems="left"
          fontSize="24px"
          ml={100}
          mb={50}
        >
          To see more details about your requests, go to your notifications.
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {chatToUs.map((item) => {
            return (
              <>
                <Card
                  spacing="small"
                  boxShadow="boxShadow050"
                  cardWidth="350px"
                  height="190px"
                >
                  <CardRow>
                    <Typography variant="h3" alignItems="left" m={0}>
                      user.name@sage.com
                    </Typography>
                  </CardRow>
                  <CardRow>
                    <Typography fontSize="16px" m={0}>
                      user.name@sage.com
                    </Typography>

                    <Pill>default pill</Pill>
                  </CardRow>
                  <CardRow>
                    <Typography fontSize="16px" m={0}>
                      user.name@sage.com
                    </Typography>
                  </CardRow>
                  <CardRow>
                    <Typography fontSize="16px" m={0}>
                      user.name@sage.com
                    </Typography>
                  </CardRow>
                </Card>
              </>
            );
          })}
        </Box>
        <Typography
          variant="p"
          alignItems="left"
          fontSize="24px"
          ml={100}
          mb={50}
        >
          If you need to change anything about your requests or have any
          questions, get in touch with us below.
        </Typography>
      </GridItem>
    </>
  );
};

export default MyRequest;
