import styled from "styled-components";

export const StyledTabsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;
  margin-top: 60vh;

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
`;
