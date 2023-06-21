import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationBarProps {
  isNotHomePage?: boolean;
}

const NavigationBar = ({ isNotHomePage }: NavigationBarProps): ReactElement => {
  const navigateTo = useNavigate();
  return (
    <>
      <Box width="100%" height={90} bg="black">
        <Typography color="white" variant="h1">
          Navigation Bar Placeholder
        </Typography>
      </Box>
      {isNotHomePage && (
        <Box width="100%" height={70} bg="green">
          <Button
            onClick={() => {
              navigateTo("/");
            }}
          >
            <Typography color="white" variant="h1">
              Gobackhome
            </Typography>
          </Button>
        </Box>
      )}
    </>
  );
};
export default NavigationBar;
