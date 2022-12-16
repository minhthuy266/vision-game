import { StyledNewsContainer } from "./styles";
import FeaturedNewsComp from "./SubComponent/FeaturedNewsComp";
import NewsListComp from "./SubComponent/NewsListComp";

const MainNewsComponent = ({ data, mostViewNews, category, total }) => {
  return (
    <StyledNewsContainer>
      <NewsListComp data={data} category={category} total={total} />
      <FeaturedNewsComp mostViewNews={mostViewNews} />
    </StyledNewsContainer>
  );
};

export default MainNewsComponent;
