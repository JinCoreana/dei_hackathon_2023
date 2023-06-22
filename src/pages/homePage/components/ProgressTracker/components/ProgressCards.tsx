import Box from "carbon-react/lib/components/box/box.component";
import { STAGES } from "../constants/Stages";
import { ReactElement, useEffect, useState } from "react";
import { Stages, Vacancy } from "../ProgressTracker.types";
import Typography from "carbon-react/lib/components/typography/typography.component";

interface ProgressCardProps {
  selectedVacancy: Vacancy;
}

const ProgressCards = ({
  selectedVacancy,
}: ProgressCardProps): ReactElement => {
  const [selectedStage, setSelectedStage] = useState("");

  useEffect(() => {
    setSelectedStage("");
  }, [selectedVacancy]);

  return (
    <>
      <Box justifySelf="center">
        <Box display="flex" flexDirection="row">
          {STAGES.map((stage: Stages) => {
            return (
              <Box
                width={260}
                height={260}
                ml={20}
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="borderRadius400"
                bg={selectedStage === stage.title ? "#F5C519" : null}
              >
                <Box
                  onClick={() => {
                    setSelectedStage(stage.title);
                  }}
                  width={250}
                  height={250}
                  bg={
                    selectedVacancy.status === stage.title
                      ? "#00A65C"
                      : "#00293F"
                  }
                  borderRadius="borderRadius400"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Typography
                      variant="h3"
                      fontSize="24px"
                      color="white"
                      mb={1}
                    >
                      {stage.title}
                    </Typography>

                    {selectedVacancy.status === stage.title ? (
                      <Typography variant="p" fontSize="24px" color="white">
                        (Your current stage){" "}
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        {selectedStage && (
          <Box width="800px" height="100px" mt={50} ml={100} >
            <Typography variant="h3" fontSize="32px" mb={3}>
              {selectedStage}
            </Typography>

            <Typography fontSize="24px">
              {STAGES.filter((stage) => stage.title === selectedStage).map(
                (stage) => stage.description
              )}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
export default ProgressCards;
