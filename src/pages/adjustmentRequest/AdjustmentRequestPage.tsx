import React, { useState } from "react";
import { ReactElement } from "react";
import NavigationBar from "../../globalComponents/NavigationBar";
import { GridContainer } from "carbon-react/lib/components/grid";
import AdjustmentRequestOptions from "./components/AdjustmentRequestOptions";
import ChatWithUs from "./components/ChatWithUs";

const AdjustmentRequestPage = (): ReactElement => {
  return (
    <>
      <NavigationBar isNotHomePage />
      <GridContainer>
        <AdjustmentRequestOptions />
        <ChatWithUs />
      </GridContainer>
    </>
  );
};
export default AdjustmentRequestPage;
