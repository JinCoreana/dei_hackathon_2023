import Box from "carbon-react/lib/components/box/box.component";
import { STAGES } from "../constants/Stages";
import { ReactElement, useContext, useEffect, useState } from "react";
import { Stages, Vacancy } from "../ProgressTracker.types";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { borderWidth200 } from "@sage/design-tokens/js/base/common";
import { GlobalContext } from "../../../../../context/GlobalContext";
import Button from "carbon-react/lib/components/button/button.component";

interface ProgressCardProps {
  selectedVacancy: Vacancy;
}

const ProgressCards = ({
  selectedVacancy,
}: ProgressCardProps): ReactElement => {
  const [selectedStage, setSelectedStage] = useState("");
  const { chosenApplication } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedStage("");
  }, [selectedVacancy]);

  return (
    <>
      <Box>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
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
                style={{ cursor: "pointer" }}
              >
                <Button
                  buttonType="tertiary"
                  p={0}
                  onClick={() => {
                    setSelectedStage(stage.title);
                  }}
                >
                  <Box
                    role="Button"
                    id={`outlineBox${
                      selectedVacancy.status === stage.title ? "Selected" : ""
                    }`}
                    width={250}
                    height={250}
                    bg={
                      selectedVacancy.status === stage.title
                        ? "#007E45"
                        : "#D9E0E4"
                    }
                    borderRadius="borderRadius400"
                    style={{
                      borderStyle: "solid",
                      borderWidth200,
                      borderColor: "black",
                    }}
                    p={0}
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
                        color={
                          selectedVacancy.status === stage.title ? "white" : ""
                        }
                        mb={1}
                      >
                        {stage.title}
                      </Typography>

                      {selectedVacancy.status === stage.title ? (
                        <Typography variant="p" fontSize="24px" color="white">
                          (Your current stage)
                        </Typography>
                      ) : null}
                    </Box>
                  </Box>
                </Button>
              </Box>
            );
          })}
        </Box>

        <Box
          width="70vw"
          height="100px"
          mt={100}
          ml={100}
          style={{ whiteSpace: "pre-line" }}
        >
          {selectedStage && chosenApplication && (
            <>
              <Typography variant="h3" fontSize="36px" mb={3}>
                {selectedStage}
              </Typography>
              {STAGES.filter((stage) => stage.title === selectedStage).map(
                (stage) => (
                  <>
                    <Typography fontSize="24px" lineHeight="30px" style={{}}>
                      {stage.description}
                    </Typography>
                    <Typography
                      fontSize="24px"
                      style={{
                        color: "green",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {stage.linkText}
                    </Typography>
                  </>
                )
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ProgressCards;
