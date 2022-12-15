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

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc((100% - 20rem) / 6));
  grid-gap: 4rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(5, calc((100% - 16rem) / 5));
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(4, calc((100% - 12rem) / 4));
  }

  @media only screen and (max-width: 31.25em) {
    grid-template-columns: repeat(3, calc((100% - 8rem) / 3));
  }

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    border-radius: 12px;
  }
`;
