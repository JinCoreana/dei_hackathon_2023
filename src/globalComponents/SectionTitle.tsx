import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps): ReactElement => {
  return (
    <Typography variant="h4" fontSize="36px" ml={100} mb={50}>
      {title}
    </Typography>
  );
};
export default SectionTitle;
