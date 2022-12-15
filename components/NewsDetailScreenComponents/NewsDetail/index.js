import { StyledContainer } from "./styles";

const NewsDetail = ({ newsDetails }) => {
  return (
    <StyledContainer>
      <div dangerouslySetInnerHTML={{ __html: newsDetails?.content }}></div>
    </StyledContainer>
  );
};

export default NewsDetail;
