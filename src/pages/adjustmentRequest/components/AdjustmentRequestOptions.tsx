import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Image from "carbon-react/lib/components/image";
import { GridContainer, GridItem } from "carbon-react/lib/components/grid";
import icon1 from "../../../images/assets/icon1.png";
import icon2 from "../../../images/assets/icon2.png";
import icon3 from "../../../images/assets/icon3.png";
import icon4 from "../../../images/assets/icon4.png";
import icon5 from "../../../images/assets/icon5.png";
import icon6 from "../../../images/assets/icon6.png";
import icon7 from "../../../images/assets/icon7.png";
import icon8 from "../../../images/assets/icon8.png";
import SectionTitle from "../../../globalComponents/SectionTitle";

const AdjustmentRequestOptions = (): ReactElement => {
  const adjustmentGrid = [
    {
      bgColor: "#000000",
      iconImage: icon1,
      title: "Request Additional Time",
      href: "/",
    },
    {
      bgColor: "#31B67A",
      iconImage: icon2,
      title: "Written Instructions",
      href: "/",
    },
    {
      bgColor: "#00293F",
      iconImage: icon3,
      title: "Quiet & Private Space",
      href: "/",
    },
    {
      bgColor: "#00A65C",
      iconImage: icon4,
      title: "Assistance in the interview",
      href: "/",
    },
    {
      bgColor: "#00293F",
      iconImage: icon5,
      title: "Interview Format Flexibility",
      href: "/",
    },
    {
      bgColor: "#000000",
      iconImage: icon6,
      title: "Visual Supports",
      href: "/",
    },
    {
      bgColor: "#00A65C",
      iconImage: icon7,
      title: "Additional Breaks",
      href: "/",
    },
    {
      bgColor: "#00293F",
      iconImage: icon8,
      title: "Clear Communication\t(Direct Language)",
      href: "/",
    },
  ];

  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
        <SectionTitle title="Your Adjustment Requests" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {adjustmentGrid.map((item) => {
            return (
              <>
                <Box
                  width={243}
                  height={221}
                  bg={item.bgColor}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  m={1}
                  borderRadius="borderRadius100"
                  onClick={() => (window.location.href = item.href)}
                >
                  <Image
                    width={75}
                    height={75}
                    src={item.iconImage}
                    alt="Sage won best compnay culture and best compnay work-life balance awards in 2021"
                  />
                  <Typography color="white" variant="h4" mt={2}>
                    {item.title}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </GridItem>
    </>
  );
};

export default AdjustmentRequestOptions;
