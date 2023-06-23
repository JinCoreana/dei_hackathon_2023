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
<<<<<<< HEAD
=======
import icon9 from "../../../images/assets/Fill.png";
>>>>>>> e10ad8a (Done the styling in adjustment Page)
import SectionTitle from "../../../globalComponents/SectionTitle";

const AdjustmentRequestOptions = (): ReactElement => {
  const adjustmentGrid = [
    {
      bgColor: "#007E45",
      iconImage: icon1,
      title: "Request Additional Time",
      href: "/",
    },
    {
      bgColor: "#00324C",
      iconImage: icon2,
      title: "Written Instructions",
      href: "/",
    },
    {
      bgColor: "#007E45",
      iconImage: icon3,
      title: "Quiet & Private Space",
      href: "/",
    },
    {
      bgColor: "#00324C",
      iconImage: icon5,
      title: "Interview Format Flexibility",
      href: "/",
    },
    {
      bgColor: "#007E45",
      iconImage: icon6,
      title: "Visual Supports",
      href: "/",
    },
    {
      bgColor: "#00324C",
      iconImage: icon7,
      title: "Additional Breaks",
      href: "/",
    },
    {
      bgColor: "#007E45",
      iconImage: icon4,
      title: "Assistance in the interview",
      href: "/",
    },
    {
<<<<<<< HEAD
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
=======
      bgColor: "#00324C",
      iconImage: icon8,
      title: "Clear Communication\t(Direct Language)",
      href: "/",
    },
    {
      bgColor: "#007E45",
      iconImage: icon9,
      title: "Other Adjustment",
>>>>>>> e10ad8a (Done the styling in adjustment Page)
      href: "/",
    },
  ];

  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
<<<<<<< HEAD
        <SectionTitle title="Your Adjustment Requests" />
=======
        <Box ml={100} mb={50} mt={5}>
          <Typography color="black" fontSize="36px" fontWeight="900">
            Request an adjustment
          </Typography>
          <Typography color="black" fontSize="28px" mt={4}>
            Got an interview? We know this can be a stressful experience, and we
            want you to succeed. If it will help you be your best self, you can
            request an adjustment ahead of your interview.
            <br />
            <br />
            Select the type of adjustment you need below, and tell us a little
            bit about why it would help you. We'll try our best to accommodate
            your request.
            <br />
            <br /> Your hiring team will review your adjustment request and get
            back to you as soon as possible.
          </Typography>
        </Box>
        <SectionTitle title="Interview adjustments" />
>>>>>>> e10ad8a (Done the styling in adjustment Page)
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
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  mb={5}
                >
                  <Box
                    width={461}
                    height={221}
                    bg={item.bgColor}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    mx={1}
                    borderRadius="borderRadius100"
                    onClick={() => (window.location.href = item.href)}
                  >
                    <Image
                      width={120}
                      height={120}
                      src={item.iconImage}
                      alt="Sage won best compnay culture and best compnay work-life balance awards in 2021"
                    />
                  </Box>
                  <Typography color="black" variant="h1" mt={1}>
                    {item.title}
<<<<<<< HEAD
                  </Typography>
=======
                  </Typography>{" "}
>>>>>>> e10ad8a (Done the styling in adjustment Page)
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
