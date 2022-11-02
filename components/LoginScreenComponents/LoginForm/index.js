import AbsoluteLoader from "@/components/common/UIHandler/Loader/AbsoluteLoader";
import { Button, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from "public/assets/icons/FacebookIcon";
import GoogleIcon from "public/assets/icons/GoogleIcon";
import LoginBtn from "public/assets/icons/LoginBtn";
import {
  LoginFormContainer,
  LoginFormWrapper,
  StyledForgotPassBtn,
  StyledFormBody,
  StyledFormHeader,
  StyledSocialGroup,
  StyledTextBtn,
} from "./styles";

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const providers = [
    {
      name: "facebook",
      Icon: <FacebookIcon />,
    },
    {
      name: "google",
      Icon: <GoogleIcon />,
    },
  ];

  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") return <AbsoluteLoader />;

  if (session) {
    push("/");
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <div>
          <StyledFormHeader>Đăng nhập tài khoản</StyledFormHeader>

          <StyledFormBody>
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item label="Số Điện Thoại hoặc Email" name="phoneOrEmail">
                <Input placeholder="Nhập số điện thoại hoặc email" />
              </Form.Item>
              <Form.Item label="Mật khẩu" name="password">
                <Input.Password placeholder="Nhập mật khẩu của bạn" />
              </Form.Item>
              <Form.Item style={{ justifyContent: "center", display: "flex" }}>
                <Button type="primary" htmlType="submit">
                  Đăng nhập &nbsp; <LoginBtn />
                </Button>
              </Form.Item>
            </Form>

            <Link href="/auth/forgot-password">
              <StyledForgotPassBtn>Quên mật khẩu?</StyledForgotPassBtn>
            </Link>

            <div
              style={{
                padding: "2rem 0",
                width: "25rem",
                margin: "0 auto",
                borderBottom: "1px solid #00223B",
                fontSize: "1.8rem",
                fontWeight: "2.2rem",
              }}
            >
              hoặc
            </div>

            <StyledSocialGroup>
              {providers.map(({ name, Icon }) => (
                <div key={name} onClick={handleOAuthSignIn(name)}>
                  {Icon}
                </div>
              ))}
            </StyledSocialGroup>

            <StyledTextBtn>
              Bạn chưa có tài khoản?{" "}
              <Link href="/auth/register">
                <span style={{ color: "#23A8F5" }}>Đăng ký ngay!</span>{" "}
              </Link>
            </StyledTextBtn>
          </StyledFormBody>
        </div>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
