import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  padding: 2rem 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }
`;

export const StyledTopNews = styled.div`
  height: 31rem;
  margin-bottom: 4rem;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-gap: 2rem;

  div:first-child {
    border-radius: 12px;
  }

  img {
    width: 100%;
    height: 31rem;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const StyledCardBody = styled.div`
  padding: 0 1.2rem 1.2rem 1.2rem;
`;

export const StyledTopNewsTitle = styled.div`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4rem;
  margin-bottom: 2rem;
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 3;
  -moz-box-orient: vertical;
  word-break: break-word;
`;

export const StyledTopNewsExcerpt = styled.div`
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 5;
  -moz-box-orient: vertical;
  word-break: break-word;
`;

export const StyledNewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc((100% - 6rem) / 4));
  grid-gap: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(3, calc((100% - 6rem) / 3));
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
    margin-bottom: 0.4rem;
  }

  > div {
    border-radius: 12px;
    border: 1px solid rgba(186, 186, 187, 0.4);
    box-shadow: rgba(0, 0, 0, 0.12) 4px 4px 16px;
  }
`;

export const StyledCardBodyDate = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: rgb(187, 188, 189);
  padding: 0.6rem 0;
`;

export const StyledCardBodyTitle = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.3rem;
  display: -webkit-box;
  overflow-y: hidden;
  -webkit-line-clamp: 3;
  -moz-box-orient: vertical;
  word-break: break-word;
  color: rgb(26, 29, 33);
`;
