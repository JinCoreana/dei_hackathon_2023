import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Image from "carbon-react/lib/components/image";
import { GridItem } from "carbon-react/lib/components/grid";

import SectionTitle from "../../../globalComponents/SectionTitle";
import RequestModal from "./RequestModal";
import { AdjustRequestPost } from "../AdjustmentRequest.types";
import { ADJUSTMENT_REQUEST_BUTTONS } from "./contants";

interface AdjustmentRequestOptions {
  data: AdjustRequestPost[];
  setData: Dispatch<SetStateAction<AdjustRequestPost[]>>;
}

const AdjustmentRequestOptions = ({
  data,
  setData,
}: AdjustmentRequestOptions): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<string[]>(
    Array(6).fill(false)
  );

  const setModalByNumber = (order: number, modalTitle: string) => {
    const chosenModal = [...isModalOpen];
    chosenModal[order] = modalTitle;
    setIsModalOpen(chosenModal);
  };

  const OpenModal = () => {
    const modal = [];
    for (let i = 0; i < isModalOpen.length; i++) {
      modal.push(
        !!isModalOpen[i] && (
          <RequestModal
            modalTitle={isModalOpen[i]}
            setIsModalOpen={setIsModalOpen}
            setAdjustmentRequestData={setData}
          />
        )
      );
    }
    return modal;
  };

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
          pl={300}
          pr={300}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {OpenModal()}
          {ADJUSTMENT_REQUEST_BUTTONS.map((item, i) => {
            return (
              <Box key={item.title}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  mb={5}
                  flexBasis="40%"
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
                    onClick={() => setModalByNumber(i, item.modalTitle)}
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
              </Box>
            );
          })}
        </Box>
      </GridItem>
    </>
  );
};

export default AdjustmentRequestOptions;
