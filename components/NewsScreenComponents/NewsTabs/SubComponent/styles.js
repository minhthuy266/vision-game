import styled from "styled-components";

export const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StyledBodyNewsList = styled.div`
  padding-right: 2rem;
`;

export const StyledNewsItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  img {
    height: 25rem;
    width: 35rem;
    object-fit: cover;
    border-radius: 12px;

    @media only screen and (max-width: 81.25em) {
      height: 22rem;
      width: 30rem;
    }
  }
`;

export const StyledNewsItemTitle = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
`;

export const StyledNewsItemDate = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgb(187, 188, 189);
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`;

export const StyledNewsItemExcerpt = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const FeaturedNewsContainer = styled.div`
  padding: 2rem;
  background: #ecedef;
  border-radius: 12px;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  height: fit-content;
`;

export const StyledBodyFeaturedNewsList = styled.div`
  padding: 1.6rem 0;
  border-bottom: 2px solid rgba(187, 188, 189, 0.4);

  &:last-child {
    border-bottom: 2px solid transparent;
  }

  img {
    height: 14rem;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const StyledFeaturedNewsItem = styled.div``;

export const StyledFeaturedNewsItemTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const StyledFeaturedNewsItemDate = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgb(187, 188, 189);
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`;

export const StyledFeaturedNewsItemExcerpt = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #b5b5b5;
`;
