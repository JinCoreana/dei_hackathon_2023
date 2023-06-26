import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { Menu, MenuItem } from "carbon-react/lib/components/menu";
import Image from "carbon-react/lib/components/image";
import { ReactElement, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertLogo from "../assets/images/alert.png";
import SageLogo from "../assets/images/SageLogo.png";
import Alert from "carbon-react/lib/components/alert";
import { GridItem } from "carbon-react/lib/components/grid";
import HomePageIcon from "../assets/images/image 34.png";
import NotificationTable from "../pages/chatWithUs/components/NotificationTable";
import { GlobalContext } from "../context/GlobalContext";

interface NavigationBarProps {
  isNotHomePage?: boolean;
}

const navigationMenu = [
  { title: "About", href: "https://www.sage.com/en-gb/company/about-sage" },
  {
    title: "DEI",
    href: "https://www.sage.com/en-gb/company/about-sage/diversity-equity-and-inclusion",
  },
  {
    title: "Careers",
    href: "https://www.sage.com/en-gb/company/careers/career-search",
  },
  {
    title: "Values",
    href: "https://www.sage.com/en-gb/company/careers",
  },
];

const NavigationBar = ({ isNotHomePage }: NavigationBarProps): ReactElement => {
  const navigateTo = useNavigate();
  const { chosenApplication } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Box
        width="100%"
        height={90}
        bg="black"
        display="flex"
        flexDirection="row"
      >
        <Box display="flex" justifyContent="center" alignItems="center" ml={30}>
          <Image src={SageLogo} alt="Sage Icon" width="100" height="56" />
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          bg="black"
        >
          <Box>
            <Menu menuType="black" display="flex" flexDirection="row">
              {navigationMenu.map((item) => {
                return (
                  <Box mr={50}>
                    <MenuItem
                      onClick={() => (window.location.href = item.href)}
                    >
                      <Typography fontSize="32px" color="white" pt={1}>
                        {item.title}
                      </Typography>
                    </MenuItem>
                  </Box>
                );
              })}
            </Menu>
          </Box>
          <Button buttonType="tertiary" onClick={() => setIsOpen(true)}>
            <Image src={AlertLogo} alt="notification logo" width="65px" />
          </Button>
          <Alert
            onCancel={() => setIsOpen(false)}
            disableEscKey={true}
            title="Notifications"
            showCloseIcon
            size={chosenApplication ? "large" : "extra-small"}
            open={isOpen}
          >
            {chosenApplication ? (
              <NotificationTable chosenApplication={chosenApplication || ""} />
            ) : (
              "Application not selected"
            )}
          </Alert>
        </Box>
      </Box>
      {isNotHomePage && (
        <Box display="flex" alignItems="center" height={70} bg="#e6ebedff">
          <Menu menuType="light" display="flex" alignItems="center">
            <Image
              src={HomePageIcon}
              alt="Homepage Icon"
              width="60"
              height="60"
              ml={6}
            />
            <MenuItem>
              <Typography
                color="black"
                fontSize="24px"
                m={0}
                p={2}
                onClick={() => {
                  navigateTo("/");
                }}
              >
                Back to Homepage
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </GridItem>
  );
};
export default NavigationBar;
