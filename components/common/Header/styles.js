import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0 12.5vw;
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
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);

  @media only screen and (min-width: 120.0625em) {
    padding: 0 calc((100vw - 1440px) / 2);
  }

  .ant-menu-horizontal {
    border-bottom: 1px solid transparent;
  }

  .ant-btn.ant-btn-default {
    border-radius: 10px;
    border: 1px solid #23a8f5;
    color: #23a8f5;
    display: flex;
    align-items: center;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #bababb;

    li:nth-child(7) {
      margin-left: 3rem;
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    padding: 0;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after {
    border-bottom: 2px solid #23a8f5;
    top: 3.6rem;
    transition: none;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-horizontal:not(.ant-menu-dark)
    > .ant-menu-item-danger.ant-menu-item:hover::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-horizontal .ant-menu-submenu-active:hover::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
    border-bottom: 2px solid #23a8f5;
    top: 3.6rem;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-item-selected.ant-menu-item-danger {
    .ant-btn {
      background: ${(props) =>
        props.isLoginScreen ? "rgba(35, 168, 245, 0.2)" : ""};
    }
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:last-child::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-horizontal:not(.ant-menu-dark)
    > .ant-menu-item-danger.ant-menu-item-selected::after {
    border-bottom: 2px solid transparent;
  }

  .ant-menu-horizontal > .ant-menu-item-selected a,
  .ant-menu-item-danger.ant-menu-item {
    color: #23a8f5;
  }

  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: #23a8f5;
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

export const StyledLoginBtn = styled.div`
  .ant-btn {
    background: ${(props) =>
      props.isLoginScreen ? "rgba(35, 168, 245, 0.2)" : ""};
  }
`;
