import React from "react";
import { ReactElement } from "react";
import NavigationBar from "../../globalComponents/NavigationBar";
import { GridContainer } from "carbon-react/lib/components/grid";
import AdjustmentRequestOptions from "./components/AdjustmentRequestOptions";
import ChatWithUs from "./components/ChatWithUs";
import MyRequest from "./components/MyRequest";

const AdjustmentRequestPage = (): ReactElement => {
  return (
    <>
      <NavigationBar isNotHomePage />
      <GridContainer>
        <AdjustmentRequestOptions />
      </GridContainer>
      <MyRequest />
      <ChatWithUs />
    </>
  );
};
export default AdjustmentRequestPage;
