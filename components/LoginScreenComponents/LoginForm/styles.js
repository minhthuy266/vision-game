import styled from "styled-components";

export const LoginFormContainer = styled.div`
  padding: 0 15vw;
`;

export const LoginFormWrapper = styled.div`
  > div {
    margin-top: 20%;
    margin-left: 66.7rem;
    width: 60rem;
    height: 30rem;
  }
`;

export const StyledFormHeader = styled.div`
  height: 5rem;
  background: #1088cd;
  border-radius: 12px 12px 0px 0px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
`;

export const StyledFormBody = styled.div`
  text-align: center;

  .ant-form {
    border-radius: 12px;
    padding: 1rem 2rem 0.1rem 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(23, 25, 26, 0.16);
    border-radius: 12px;
    margin-bottom: 2rem;
  }

  .ant-input-affix-wrapper > input.ant-input {
    padding: 0;
    font-size: inherit;
    border: none;
    outline: none;
    background: transparent;
  }

  input,
  .ant-input-affix-wrapper {
    background: rgba(186, 186, 187, 0.2);
    border-radius: 8px;
    height: 4rem;
    display: flex;
    align-items: center;
  }

  label {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .ant-btn {
    background: #1088cd;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    padding-top: 7px;
    padding-bottom: 7px;
    height: 4rem;
  }
`;

export const StyledForgotPassBtn = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.3rem;
`;

export const StyledSocialGroup = styled.div`
  margin: 1rem auto 2rem auto;
  display: flex;
  justify-content: center;

  > div {
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export const StyledTextBtn = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.3rem;
`;
