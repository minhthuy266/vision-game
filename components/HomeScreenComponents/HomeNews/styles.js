import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  padding: 2rem 5rem;
`;

export const StyledTopNews = styled.div`
  height: 310px;
  margin-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-gap: 2rem;

  div:first-child {
    border-radius: 12px;
  }
`;

export const StyledNewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc((1332px - 16rem) / 4));
  grid-gap: 2rem;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.4rem;
  }

  div {
    border-radius: 12px;
  }
`;
