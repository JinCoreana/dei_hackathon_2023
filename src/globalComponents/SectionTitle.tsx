import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";

interface SectionTitleProps {
  title: string;
  mt?: number
}

const SectionTitle = ({ title, mt }: SectionTitleProps): ReactElement => {
  return (
    <Box mt={mt}>
    <Typography variant="h1" fontSize="36px" ml={100} mb={50}>
      {title}
    </Typography></Box>
  );
};
export default SectionTitle;
