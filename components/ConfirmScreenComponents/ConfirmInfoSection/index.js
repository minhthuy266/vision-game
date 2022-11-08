import Image from "next/image";
import ConfirmInfoIcon from "public/assets/icons/ConfirmInfoIcon";
import {
  StyledBody,
  StyledBodyLeft,
  StyledBodyRight,
  StyledConfirmInfoSection,
  StyledHeader,
} from "./styles";
import GameImage from "public/assets/images/HomeScreen_ListGame_Item3.png";
import { Button, Table } from "antd";
import Link from "next/link";

const ConfirmInfoSection = () => {
  const columns = [
    {
      dataIndex: "name",
    },
    {
      dataIndex: "value",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Server: ",
      value: "S099",
    },
    {
      key: "2",
      name: "ID tài khoản: ",
      value: "123654789",
    },
    {
      key: "3",
      name: "Tên nhân vật: ",
      value: "Bé Blackkkkk",
    },
    {
      key: "4",
      name: "Gói nạp: ",
      value: "20.000.000",
    },
    {
      key: "5",
      name: "Phương thức thanh toán: ",
      value: "Ví Appota",
    },
  ];

  return (
    <StyledConfirmInfoSection>
      <StyledHeader>
        <ConfirmInfoIcon /> &nbsp; Xác nhận thông tin
      </StyledHeader>

      <StyledBody>
        <StyledBodyLeft>
          <div>
            <Image src={GameImage} alt="Game Item Image" />
          </div>
        </StyledBodyLeft>

        <StyledBodyRight>
          <Table columns={columns} dataSource={data} pagination={false} />
          <Button block>Thanh toán</Button>

          <p>
            Bằng việc chọn &quot;Thanh toán&quot;, bạn đồng ý với{" "}
            <Link href="/policy">
              chính sách cung cấp, huỷ và hoàn trả dịch vụ.
            </Link>
          </p>
        </StyledBodyRight>
      </StyledBody>
    </StyledConfirmInfoSection>
  );
};

export default ConfirmInfoSection;
