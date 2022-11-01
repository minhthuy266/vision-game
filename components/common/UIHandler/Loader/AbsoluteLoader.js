import { Spin } from "antd";
import styled from "styled-components";

const SpinContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => (props.z999 ? "996" : "2000")};
  background: ${(props) =>
    props.noBg ? "rgba(0, 0, 0, 0.02)" : "var(--loader-mask)"};
  width: 100%;
  height: 100%;

  .ant-spin-spinning {
    position: absolute;
    display: inline-block;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const AbsoluteLoader = ({ noBg, z999 }) => {
  return (
    <SpinContainer noBg={noBg} z999={z999}>
      <Spin size="large" />
    </SpinContainer>
  );
};

export default AbsoluteLoader;
