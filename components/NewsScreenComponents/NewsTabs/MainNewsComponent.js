import React from "react";
import { StyledNewsContainer } from "./styles";
import FeaturedNewsComp from "./SubComponent/FeaturedNewsComp";
import NewsListComp from "./SubComponent/NewsListComp";

const MainNewsComponent = () => {
  return (
    <StyledNewsContainer>
      <NewsListComp />
      <FeaturedNewsComp />
    </StyledNewsContainer>
  );
};

export default MainNewsComponent;
