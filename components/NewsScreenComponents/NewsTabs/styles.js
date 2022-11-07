import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 0 12.5vw;
  margin-bottom: 4rem;

  @media only screen and (min-width: 120.0625em) {
    padding: 0 calc((100vw - 1440px) / 2);
  }

  @media only screen and (max-width: 93.75em) {
    padding: 0 8vw;
  }

  @media only screen and (max-width: 75em) {
    padding: 0 6vw;
  }

  @media only screen and (max-width: 62.5em) {
    padding: 0 4vw;
  }

  @media only screen and (max-width: 28.125em) {
    padding: 0;
  }
`;

export const StyledTabsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;
  margin-top: 60vh;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }

  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
  }

  .ant-tabs-tab {
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.6rem;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 6rem;

    @media only screen and (max-width: 34.375em) {
      margin: 0 0 0 3rem;
    }
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 1px solid transparent;
  }
`;

export const StyledTabPane = styled.div``;

export const StyledNewsContainer = styled.div`
  display: grid;
  grid-template-columns: calc(75% - 4rem) 25%;
  margin-top: 2rem;
  grid-gap: 4rem;

  @media only screen and (max-width: 106.25em) {
    grid-template-columns: calc(70% - 4rem) 30%;
  }

  @media only screen and (max-width: 68.75em) {
    grid-template-columns: calc(65% - 4rem) 35%;
  }

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: calc(55% - 4rem) 45%;
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: calc(50% - 3rem) 50%;
    grid-gap: 3rem;
  }
`;
