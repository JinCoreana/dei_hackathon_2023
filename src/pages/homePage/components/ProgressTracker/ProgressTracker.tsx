import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Image from "carbon-react/lib/components/image";
import { Select, Option } from "carbon-react/lib/components/select";
import { ReactElement, useContext } from "react";
import ApplicantData from "../../../../mock/GETOneApplicant.json";
import ProgressCard from "./components/ProgressCards";
import { Vacancy } from "./ProgressTracker.types";
import StageArrowBackground from "../../../../assets/images/stageArrowBackground.png";
import SectionTitle from "../../../../globalComponents/SectionTitle";
import { GlobalContext } from "../../../../context/GlobalContext";

const ProgressTracker = (): ReactElement => {
  const { chosenApplication, setChosenApplication } = useContext(GlobalContext);

  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Typography fontSize="24px" color="white" style={{ textAlign: "center" }}>
        Don't forget how passionate we were in the first year in Sage 2023. Dev:
        Aryan Walia x Jin Choi x Gaurav Khetwal + QA: Anna Sobol
      </Typography>

      <SectionTitle title="Your Sage application journey" mt={50} />
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="p" fontSize="24px" ml={100} mb={0}>
          See the status of your application for
        </Typography>

        {ApplicantData.vacancies.length === 1 ? (
          <Typography variant="h1">{chosenApplication}</Typography>
        ) : (
          <Box width="500px">
            <Select
              size="large"
              ml="20px"
              mr="50px"
              maxWidth="400px"
              placeholder="Select application"
              value={chosenApplication}
              onChange={(e) => setChosenApplication(e.target.value)}
            >
              {ApplicantData.vacancies.map((vacancy: Vacancy) => {
                return (
                  <Option
                    width="500px"
                    text={vacancy.job_title.replace(/\s/g, "\u00A0")}
                    value={vacancy.job_title}
                  />
                );
              })}
            </Select>
          </Box>
        )}
      </Box>
      <Typography variant="p" fontSize="24px" ml={100} mt={50}>
        Select each stage below to find out more information.
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          backgroundImage={`url(${StageArrowBackground})`}
          backgroundSize="contain"
          minHeight={600}
        >
          <Box display="flex" mt={200}>
            <ProgressCard
              selectedVacancy={
                ApplicantData.vacancies.filter(
                  (vacancy) => vacancy.job_title === chosenApplication
                )[0] || ""
              }
            />
          </Box>
        </Image>
      </Box>
    </GridItem>
  );
};
export default ProgressTracker;
