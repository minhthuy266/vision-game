import styled from "styled-components";

export const StyledTabsWrapper = styled.div`
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
