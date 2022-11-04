import styled from "styled-components";

export const StyledWrapper = styled.div`
  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;

    @media only screen and (max-width: 56.25em) {
      height: 50vh;
    }
  }
`;
