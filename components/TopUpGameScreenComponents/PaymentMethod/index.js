import PaymentMethodIcon from "public/assets/icons/PaymentMethodIcon";
import React, { useState } from "react";
import { StyledWrapper } from "styles/styles";
import {
  StyledBody,
  StyledHeader,
  StyledSectionWrapper,
  StyledWalletGroup,
  StyledWalletItem,
} from "./styles";
import { Radio } from "antd";
import Appota from "public/assets/images/TopUpScreen_Appota.png";
import VTCPay from "public/assets/images/TopUpScreen_VTCPay.png";
import Momo from "public/assets/images/TopUpScreen_Momo.png";
import Vimo from "public/assets/images/TopUpScreen_Vimo.png";
import VNPay from "public/assets/images/TopUpScreen_VNPay.png";
// import ZaloPay from "public/assets/images/TopUpScreen_ZaloPay.png";
import Image from "next/image";

const PaymentMethod = () => {
  const [value, setValue] = useState(1);
  const [active, setActive] = useState("1");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const walletList = [
    {
      id: "1",
      name: "Appota",
      img: Appota,
    },

    {
      id: "2",
      name: "VTCPay",
      img: VTCPay,
    },

    {
      id: "3",
      name: "Momo",
      img: Momo,
    },

    {
      id: "4",
      name: "VNPay",
      img: VNPay,
    },

    {
      id: "5",
      name: "Vimo",
      img: Vimo,
    },

    {
      id: "6",
      name: "ZaloPay",
      img: ZaloPay,
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <StyledHeader>
          <PaymentMethodIcon /> &nbsp; Phương thức thanh toán
        </StyledHeader>

        <StyledBody>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Ví Vision</Radio>
            <Radio value={2}>Ví điện tử</Radio>
            <Radio value={3}>Thẻ ngân hàng nội địa</Radio>
            <Radio value={4}>Thẻ thanh toán quốc tế</Radio>
            <Radio value={5}>Tổng đài 9029</Radio>
          </Radio.Group>

          <StyledWalletGroup>
            {walletList.map((el) => {
              return (
                <StyledWalletItem
                  key={el.id}
                  onClick={() => setActive(el.id)}
                  active={el.id === active}
                >
                  <Image src={el.img} alt={el.name} />
                </StyledWalletItem>
              );
            })}
          </StyledWalletGroup>
        </StyledBody>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default PaymentMethod;
