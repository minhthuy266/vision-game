import { Button } from "antd";
import styled from "styled-components";

export const TopBannerContainer = styled.div`
  margin-top: 80px;
  padding: 0;

  img {
    width: 100vw;
    height: auto;
    margin-top: -6rem;
  }
`;

export const StyledBtnWrapper = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  bottom: 60px;
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
