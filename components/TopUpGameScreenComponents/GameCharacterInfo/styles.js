import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }

  .ant-form-inline {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
`;

export const StyledFormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc((100% - 12rem) / 4));
  grid-gap: 4rem;
  width: 100%;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(4, calc((100% - 9rem) / 4));
    grid-gap: 3rem;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: 1fr;
  }
`;
