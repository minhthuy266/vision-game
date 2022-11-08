import { Button, Col, Form, Input, Select } from "antd";
import GameCharacterInfoIcon from "public/assets/icons/GameCharacterInfoIcon";
import { StyledBody, StyledWrapper } from "styles/styles";
import {
  StyledFormWrapper,
  StyledHeader,
  StyledSectionWrapper,
} from "./styles";

const GameCharacterInfo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <StyledHeader>
          <GameCharacterInfoIcon /> &nbsp; Thông tin nhân vật
        </StyledHeader>

        <StyledBody>
          <Form
            layout="inline"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <StyledFormWrapper>
              <Form.Item label="Server" name="server">
                <Select placeholder="Chọn server">
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="ID tài khoản" name="accountId">
                <Input placeholder="Nhập số ID tài khoản" />
              </Form.Item>

              <Form.Item label="Tên nhân vật" name="charName">
                <Input placeholder="Nhập tên nhân vật" />
              </Form.Item>

              <Form.Item style={{ display: "flex", alignItems: "flex-end" }}>
                <Button type="primary" htmlType="submit" block>
                  Lấy nhân vật
                </Button>
              </Form.Item>
            </StyledFormWrapper>
          </Form>
        </StyledBody>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default GameCharacterInfo;
