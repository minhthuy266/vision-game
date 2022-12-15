import React from "react";
import { StyledNewsContainer } from "./styles";
import FeaturedNewsComp from "./SubComponent/FeaturedNewsComp";
import NewsListComp from "./SubComponent/NewsListComp";

const MainNewsComponent = ({ data, mostViewNews }) => {
  return (
    <StyledNewsContainer>
      <NewsListComp data={data} />
      <FeaturedNewsComp mostViewNews={mostViewNews} />
    </StyledNewsContainer>
  );
};

export default MainNewsComponent;
