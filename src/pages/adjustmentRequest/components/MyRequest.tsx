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
  // for demo purpose, uncomment line 24 and comment the other const myRequest (mock data would be used otherwise)

  // const myRequests: any[] = [];
  const myRequests: any[] = [
    {
      heading: "Visual Support",
      status: { heading: "Status ", value: "Approved", pillBorder: "#008A21" },
      requested: { heading: "Requested:", value: "07/05/2023" },
      details: { heading: "Detail:", value: "Closed captioning" },
    },
    {
      heading: "Quiet or private space",
      status: { heading: "Status ", value: "Declined", pillBorder: "#CB374A" },
      requested: { heading: "Requested: ", value: "06/05/2023" },
      details: { heading: "Detail:", value: "N/A" },
    },
    {
      heading: "Additional time",
      status: { heading: "Status ", value: "In review", pillBorder: "#335B70" },
      requested: { heading: "Requested:", value: "02/05/2023" },
      details: { heading: "Detail:", value: "Regular breaks" },
    },
  ];

  return (
    <>
      {myRequests.length > 0 ? (
        <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
          <SectionTitle title="My adjustments" />
          <Typography
            variant="h3"
            alignItems="left"
            ml={100}
            mb={20}
            fontSize="28px"
            lineHeight="32px"
          >
            You have submitted the following adjustment requests:
          </Typography>
          <Typography
            fontWeight="strong"
            alignItems="left"
            fontSize="24px"
            lineHeight="32px"
            ml={100}
            mb={50}
          >
            To see more details about your requests, go to your notifications.
          </Typography>

          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {myRequests.map((item) => {
              return (
                <>
                  <Card
                    spacing="small"
                    boxShadow="boxShadow100"
                    cardWidth="350px"
                    height="auto"
                    roundness="default"
                  >
                    <CardRow>
                      <Typography
                        variant="segment-header"
                        alignItems="center"
                        mt={2}
                        spacing="small"
                      >
                        {item.heading}
                      </Typography>
                    </CardRow>
                    <CardRow pb={0}>
                      <Typography fontSize="20px" fontWeight="bold" mr={2}>
                        {item.status.heading}
                      </Typography>
                      <Pill
                        borderColor={item.status.pillBorder}
                        size="S"
                        mb={2}
                      >
                        {item.status.value}
                      </Pill>
                    </CardRow>
                    <CardRow pb={0} pt={0}>
                      <Typography fontSize="20px" fontWeight="bold" m={0}>
                        {item.requested.heading}
                      </Typography>
                      <Typography variant="h4" m={0}>
                        {item.requested.value}
                      </Typography>
                    </CardRow>
                    <CardRow pb={0}>
                      <Typography fontSize="20px" fontWeight="bold" m={0}>
                        {item.details.heading}
                      </Typography>
                      <Typography variant="h4" mb={2}>
                        {item.details.value}
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
            lineHeight="32px"
          >
            If you need to change anything about your requests or have any
            questions, get in touch with us below.
          </Typography>
        </GridItem>
      ) : (
        <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
          <SectionTitle title="My adjustments" />
          <Typography
            variant="h3"
            alignItems="left"
            ml={100}
            mb={20}
            fontSize="28px"
            lineHeight="32px"
          >
            You have not made any adjustment requests yet.
          </Typography>
        </GridItem>
      )}
    </>
  );
};

export default MyRequest;
