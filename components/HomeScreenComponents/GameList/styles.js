import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  padding: 2rem 4rem;
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc((100% - 20rem) / 6));
  grid-gap: 4rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(5, calc((100% - 16rem) / 5));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
