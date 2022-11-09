import styled from "styled-components";

export const StyledConfirmInfoSection = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  padding: 2rem;
`;

export const StyledHeader = styled.div`
  padding-left: 3rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  color: #17191a;
  border-bottom: 1px solid rgba(186, 186, 187, 0.4);
  padding-bottom: 2rem;

  @media only screen and (max-width: 31.25em) {
    padding-left: 0;
  }
`;

export const StyledBody = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 8rem;
  grid-gap: 2rem;

  @media only screen and (max-width: 75em) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 31.25em) {
    padding: 0;
  }

  .ant-table-thead {
    display: none;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid transparent;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    position: relative;
    padding: 0;
    overflow-wrap: break-word;
    padding-bottom: 1.2rem;
  }
`;

export const StyledBodyLeft = styled.div``;

export const StyledBodyRight = styled.div`
  .ant-btn {
    margin-top: 2rem;
    color: #fff;
    background: #23a8f5;
    border-radius: 8px;
    height: 4.4rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;

    a {
      color: #23a8f5;
    }
  }
`;
