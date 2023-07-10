import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import SectionTitle from "../../../globalComponents/SectionTitle";
import { Card, CardRow } from "carbon-react/lib/components/card";
import Pill from "carbon-react/lib/components/pill";
import { AdjustRequestPost } from "../AdjustmentRequest.types";
const MyRequest = ({ data }: { data: AdjustRequestPost[] }): ReactElement => {
  return (
    <>
      {data.length > 0 ? (
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

          <Box display="flex" flexWrap="wrap" ml="100px" mr="20px">
            {data.map((item) => {
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
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1)}
                      </Typography>
                    </CardRow>
                    <CardRow pb={0}>
                      <Typography fontSize="20px" fontWeight="bold" mr={2}>
                        Status
                      </Typography>
                      <Pill
                        borderColor={
                          item.status === "Approved"
                            ? "#008A21"
                            : "In review"
                            ? "#335B70"
                            : "Declined"
                            ? "#335B70"
                            : "#008A21"
                        }
                        size="S"
                        mb={2}
                      >
                        {item.status}
                      </Pill>
                    </CardRow>
                    <CardRow pb={0} pt={0}>
                      <Typography
                        fontSize="20px"
                        fontWeight="bold"
                        m={0}
                        mr={1}
                      >
                        Requested:
                      </Typography>
                      <Typography variant="h4" m={0}>
                        {item.date}
                      </Typography>
                    </CardRow>
                    <CardRow pb={0}>
                      <Typography
                        fontSize="20px"
                        fontWeight="bold"
                        m={0}
                        mr={1}
                      >
                        Details:
                      </Typography>
                      <Box>
                        <Typography variant="h4" mb={2}>
                          {item.radio}
                          {item.dropdown}
                          {item.textbox}
                        </Typography>
                      </Box>
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
