import styled from "styled-components";

export const StyledTabsWrapper = styled.div`
  .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    margin: 0 auto;
  }

  .ant-tabs-tab {
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.6rem;
    color: #b5b5b5;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 5rem;
  }

  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    border-bottom: 1px solid transparent;
  }
`;

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledHeader = styled.div`
  > div,
  div a {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.6rem;
  }

  > div:nth-child(2) {
    color: #23a8f5;
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(6, calc((100% - 20rem) / 6));
  grid-gap: 4rem;
`;
