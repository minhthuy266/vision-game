import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0 15vw;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;

  .ant-menu-horizontal {
    border-bottom: 1px solid transparent;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #bababb;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after {
    border-bottom: 2px solid #1890ff;
    top: 2.6rem;
    transition: none;
  }

  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    transition: none;
  }

  .ant-menu-horizontal .ant-menu-item,
  .ant-menu-horizontal .ant-menu-submenu-title {
    transition: none;
  }

  .ant-menu-overflow-item.ant-menu-item {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;
