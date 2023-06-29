import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement, useContext } from "react";
import Image from "carbon-react/lib/components/image";
import { GridItem } from "carbon-react/lib/components/grid";
import firstIcon from "../../../assets/images/note.png";
import fifthIcon from "../../../assets/images/more.png";
import sixthIcon from "../../../assets/images/chat.png";
import fourthIcon from "../../../assets/images/adjust.png";
import secondIcon from "../../../assets/images/question.png";
import thirdIcon from "../../../assets/images/check.png";
import SectionTitle from "../../../globalComponents/SectionTitle";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Button from "carbon-react/lib/components/button";
const QuickLinks = (): ReactElement | null => {
  const { chosenApplication, setToaster } = useContext(GlobalContext);
  const navigateTo = useNavigate();
  const quicklinkGrid = [
    {
      bgColor: "#00324C",
      iconImage: firstIcon,
      title: "My Applications",
      subtitle: "View application details and documents",
      external: true,
      href: null,
    },
    {
      bgColor: "#007E45",
      iconImage: secondIcon,
      title: "Interview process guide",
      subtitle: "Find out what to expect at each stage",
      external: true,
      href: null,
    },
    {
      bgColor: "#00324C",
      iconImage: thirdIcon,
      title: "Preparation resources",
      subtitle: "Prepare for interview at your own pace",
      external: true,
      href: null,
    },
    {
      bgColor: "#007E45",
      iconImage: fourthIcon,
      title: "Adjustments",
      subtitle: "Request an adjustment for interview",
      external: false,
      href: "/adjustment_request",
    },
    {
      bgColor: "#00324C",
      iconImage: fifthIcon,
      title: "Learn more about Sage",
      subtitle: "Go to the Sage careers page",
      external: true,
      href: "https://www.sage.com/en-gb/company/careers/career-search",
    },
    {
      bgColor: "#007E45",
      iconImage: sixthIcon,
      title: "Get in touch",
      subtitle: "Ask us any questions",
      external: false,
      href: "/chat_with_us",
    },
  ];

  if (!chosenApplication) return null;
  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
        <SectionTitle title="Quick links" mt={150} />
        <Typography
          variant="h4"
          fontSize="24px"
          lineHeight="30px"
          ml={100}
          mb={50}
        >
          We know how important your career is, and we want you to succeed and
          reach your goals here at Sage. <br />
          Use the links below to help you with your application journey.
        </Typography>

        <Box
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          style={{ maxWidth: "1500px" }}
        >
          {quicklinkGrid.map((item) => {
            return (
              <>
                <button
                  className="accessibility_frame"
                  onClick={() => {
                    !item.href
                      ? setToaster(true)
                      : item.external
                      ? (window.location.href = item.href)
                      : navigateTo(item.href);
                  }}
                >
                  <Box
                    width={461}
                    height={221}
                    bg={item.bgColor}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    m={1}
                    borderRadius="borderRadius100"
                    tabIndex="-1"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      width={75}
                      height={75}
                      src={item.iconImage}
                      alt="Sage won best company culture and best company work-life balance awards in 2021"
                    />
                    <Typography
                      color="white"
                      variant="h3"
                      fontSize="24px"
                      mt={2}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="white" fontSize="20px" variant="p">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </button>
              </>
            );
          })}
        </Box>
      </GridItem>
    </>
  );
};

export default QuickLinks;
