import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { ReactElement } from "react";
import Image from "carbon-react/lib/components/image";
import { GridItem } from "carbon-react/lib/components/grid";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import icon5 from "../../../assets/images/icon5.png";
import icon6 from "../../../assets/images/icon6.png";
import icon7 from "../../../assets/images/icon7.png";
import icon8 from "../../../assets/images/icon8.png";
import icon9 from "../../../assets/images/Fill.png";
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
      bgColor: "#00324C",
      iconImage: icon8,
      title: "Clear Communication\t(Direct Language)",
      href: "/",
    },
    {
      bgColor: "#007E45",
      iconImage: icon9,
      title: "Other Adjustment",
      href: "/",
    },
  ];

  return (
    <>
      <GridItem alignSelf="stretch" justifySelf="stretch" gridColumn="1/13">
        <Box ml={100} mb={50} mt={5}>
          <Typography color="black" fontSize="36px" fontWeight="900">
            Request an adjustment
          </Typography>
          <Typography color="black" fontSize="28px" mt={4} lineHeight="32px">
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
                  flexBasis="30%"
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
                    style={{ cursor: "pointer" }}
                    borderRadius="borderRadius100"
                    onClick={() => (window.location.href = item.href)}
                  >
                    <Image
                      width={120}
                      height={120}
                      src={item.iconImage}
                      alt="Sage won best company culture and best company work-life balance awards in 2021"
                    />
                  </Box>
                  <Typography color="black" variant="h1" mt={1}>
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
