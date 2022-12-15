import styled from "styled-components";

export const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    margin-right: 1rem;
  }
`;

export const StyledBodyNewsList = styled.div`
  padding-right: 2rem;

  a:last-child > div {
    border-bottom: 1px solid transparent;
  }

  @media only screen and (max-width: 50em) {
    padding-right: 0;
  }
`;

export const StyledNewsItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid #ecedef;

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: 1fr;
  }

  img {
    height: 25rem;
    width: 35rem;
    object-fit: cover;
    border-radius: 12px;

    @media only screen and (max-width: 81.25em) {
      height: 22rem;
      width: 30rem;
    }

    @media only screen and (max-width: 50em) {
      height: 19rem;
      width: 26rem;
    }

    @media only screen and (max-width: 43.75em) {
      height: 100%;
      width: 100%;
    }
  }
`;

export const StyledNewsItemTitle = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 3;
  -moz-box-orient: vertical;
  word-break: break-word;
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
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 4;
  -moz-box-orient: vertical;
  word-break: break-word;
`;

export const FeaturedNewsContainer = styled.div`
  padding: 2rem;
  background: #ecedef;
  border-radius: 12px;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  height: fit-content;
  position: sticky;
  top: 12rem;
  margin-top: 0px;
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
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 3;
  -moz-box-orient: vertical;
  word-break: break-word;
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
