import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  margin-bottom: 2rem;
`;

export const StyledBody = styled.div`
  .ant-radio-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const StyledWalletGroup = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const StyledWalletItem = styled.div`
  border-radius: 12px;
  background: ${(props) => (props.active ? "rgba(35, 168, 245, 0.06)" : "")};
  border: ${(props) =>
    props.active
      ? " 2px solid #23A8F5"
      : " 1px solid rgba(186, 186, 187, 0.4)"};
`;
