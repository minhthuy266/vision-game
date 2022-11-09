import ConfirmInfoSection from "@/components/ConfirmScreenComponents/ConfirmInfoSection";
import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "styles/styles";

const StyledConfirmScreen = styled.div`
  margin-top: 100px;
`;

const ConfirmScreen = () => {
  return (
    <StyledWrapper>
      <StyledConfirmScreen>
        <ConfirmInfoSection />
      </StyledConfirmScreen>
    </StyledWrapper>
  );
};

export default ConfirmScreen;
