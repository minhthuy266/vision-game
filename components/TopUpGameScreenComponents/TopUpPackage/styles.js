import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(23, 25, 26, 0.16);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 2rem 4rem;
`;

export const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  color: #17191a;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;

  div {
    height: 8rem;
  }

  @media only screen and (max-width: 93.75em) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledItemList = styled.div`
  padding: 0 1.2rem;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  border: ${(props) =>
    props.active
      ? " 2px solid #23A8F5"
      : " 1px solid rgba(186, 186, 187, 0.4)"};

  /* opacity: ${(props) => (props.active ? "1" : "0.4")}; */
  background: ${(props) => (props.active ? "rgba(35, 168, 245, 0.06)" : "")};

  color: ${(props) => (props.active ? "#23A8F5" : "#000")};

  /* span svg {
    
    @media only screen and (max-width: 93.75em) {
      transform: scale(0.8);
    }
  } */
`;
