import styled from "styled-components";

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
  margin-bottom: 2rem;
`;
