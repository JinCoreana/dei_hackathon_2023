import React, { useState } from "react";
import { ReactElement } from "react";
import NavigationBar from "../../globalComponents/NavigationBar";
import { GridContainer } from "carbon-react/lib/components/grid";
import AdjustmentRequestOptions from "./components/AdjustmentRequestOptions";
import ChatWithUs from "./components/ChatWithUs";
import MyRequest from "./components/MyRequest";
import { AdjustRequestPost } from "./AdjustmentRequest.types";
import AdjustmentRequest from "../../mock/PUTAdjustmentRequest.json";
import { ADJUSTMENT_REQUEST_INITIAL_DATA } from "./components/contants";

const AdjustmentRequestPage = (): ReactElement => {
  const [adjustmentRequestData, setAdjustmentRequestData] =
    useState<AdjustRequestPost[]>(AdjustmentRequest);

  return (
    <>
      <NavigationBar isNotHomePage />
      <GridContainer>
        <AdjustmentRequestOptions
          data={adjustmentRequestData}
          setData={setAdjustmentRequestData}
        />
      </GridContainer>
      <MyRequest data={adjustmentRequestData} />
      <ChatWithUs />
    </>
  );
};
export default AdjustmentRequestPage;
