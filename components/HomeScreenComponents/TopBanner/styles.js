import { Button } from "antd";
import styled from "styled-components";

export const TopBannerContainer = styled.div`
  margin-top: 80px;
  padding: 0;
  position: relative;

  img {
    width: 100vw;
    height: 100vh;
    margin-top: -6rem;
    object-fit: cover;

    @media only screen and (max-width: 56.25em) {
      height: 70vh;
    }

    @media only screen and (min-width: 120em) {
      margin-top: 0;
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  bottom: 4vh;

  @media only screen and (max-width: 106.25em) {
    grid-template-columns: calc(70% - 4rem) 30%;
  }
`;

export const StyledBtn = styled(Button)`
  background: linear-gradient(180deg, #23a8f5 0%, #116da2 60.42%, #08537d 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 3px rgba(6, 99, 152, 0.75);
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  height: auto;

  &:hover {
    background: linear-gradient(
      180deg,
      #23a8f5 0%,
      #116da2 60.42%,
      #08537d 100%
    );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25),
      inset 0px 0px 0px 3px rgba(6, 99, 152, 0.75);
    color: #fff;
  }

  span {
    padding: 1.4rem 6.6rem;
  }
`;
