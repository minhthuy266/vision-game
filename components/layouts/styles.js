import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 80px;
  min-height: ${(props) =>
    props.isAuthScreen ? "calc(100vh - 50px - 80px)" : "100vh"};
  overflow-y: ${(props) => (props.isAuthScreen ? "hidden" : "")};
`;
