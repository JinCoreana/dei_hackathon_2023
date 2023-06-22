import Box from "carbon-react/lib/components/box/box.component";
import { GridItem } from "carbon-react/lib/components/grid";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Image from "carbon-react/lib/components/image";
import { Select, Option } from "carbon-react/lib/components/select";
import { ReactElement, useState } from "react";
import ApplicantData from "../../../../mock/GETOneApplicant.json";
import ProgressCard from "./components/ProgressCards";
import { Vacancy } from "./ProgressTracker.types";
import StageArrowBackground from "../../../../assets/images/stageArrowBackground.png";
import SectionTitle from "../../../../globalComponents/SectionTitle";

const ProgressTracker = (): ReactElement => {
  const [selectedApplication, setSelectedApplication] = useState(
    ApplicantData.vacancies[0].job_title
  );
  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <SectionTitle title="Your Sage application journey" mt={50} />
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography variant="p" fontSize="24px" ml={100} mb={0}>
          See the status of your application for
        </Typography>
        {ApplicantData.vacancies.length === 1 ? (
          <Typography variant="h1">{selectedApplication}</Typography>
        ) : (
          <Box width="300px">
            <Select
              size="large"
              ml="20px"
              maxWidth="400px"
              value={selectedApplication}
              onChange={(e) => setSelectedApplication(e.target.value)}
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
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          backgroundImage={`url(${StageArrowBackground})`}
          backgroundSize="80%"
          minHeight={600}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={180}
          >
            <ProgressCard
              selectedVacancy={
                ApplicantData.vacancies.filter(
                  (vacancy) => vacancy.job_title === selectedApplication
                )[0]
              }
            />
          </Box>
        </Image>
      </Box>
    </GridItem>
  );
};
export default ProgressTracker;
