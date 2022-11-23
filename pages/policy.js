import MainContent from "@/components/PolicyScreenComponents/MainContent";
import Head from "next/head";
import React from "react";
import { StyledWrapper } from "styles/styles";

const PolicyScreen = () => {
  return (
    <>
      <Head>
        <title>Điều Khoản</title>
      </Head>
      <StyledWrapper>
        <MainContent />
      </StyledWrapper>
    </>
  );
};

export default PolicyScreen;
