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
`;

export const StyledBody = styled.div`
  margin-top: 2rem;

  .ant-row {
    flex-direction: column;
    width: 100%;
  }

  .ant-form-inline .ant-form-item {
    margin-right: 4rem;

    @media only screen and (max-width: 106.25em) {
      margin-right: 2rem;
    }

    @media only screen and (max-width: 93.75em) {
      margin-right: 1rem;
    }

    @media only screen and (max-width: 68.75em) {
      margin-right: 0;
    }
  }

  .ant-col {
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }

  .ant-form-item-label {
    text-align: left;
  }

  input {
    border-radius: 8px;
    height: 4.4rem;

    @media only screen and (max-width: 93.75em) {
      width: 95%;
    }

    @media only screen and (max-width: 68.75em) {
      width: 92%;
    }
  }

  .ant-btn {
    background: #1088cd;
    border-radius: 8px;
    height: 4.4rem;
  }
`;
