import LoginForm from "@/components/LoginScreenComponents/LoginForm";
import Image from "next/image";
import BackgroundImage from "public/assets/images/LoginScreen_Banner.png";
import styled from "styled-components";

const LoginScreenContainer = styled.div`
  display: flex;
  background: url(${BackgroundImage});
`;

const StyledImage = styled.div`
  position: absolute;
  z-index: -1;

  img {
    height: calc(100vh - 80px - 50px);
    width: 100vw;
    object-fit: cover;
  }
`;

const LoginScreen = () => {
  return (
    <LoginScreenContainer>
      <StyledImage>
        <Image src={BackgroundImage} alt="Login Background Image" />
      </StyledImage>
      <LoginForm />
    </LoginScreenContainer>
  );
};

export default LoginScreen;
