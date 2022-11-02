import { Menu } from "antd";
import CentIcon from "public/assets/icons/CentIcon";
import TopUpPackageIcon from "public/assets/icons/TopUpPackageIcon";
import { useState } from "react";
import { StyledWrapper } from "styles/styles";
import {
  StyledBody,
  StyledHeader,
  StyledItemList,
  StyledSectionWrapper,
} from "./styles";

const TopUpPackage = () => {
  const [active, setActive] = useState("5");

  const items = [
    {
      label: "10.000",
      key: "0",
    },
    {
      label: "20.000",
      key: "1",
    },

    {
      label: "50.000",
      key: "2",
    },
    {
      label: "100.000",
      key: "3",
    },
    {
      label: "200.000",
      key: "4",
    },

    {
      label: "500.000",
      key: "5",
    },
    {
      label: "1.000.000",
      key: "6",
    },

    {
      label: "2.000.000",
      key: "7",
    },
    {
      label: "5.000.000",
      key: "8",
    },
    {
      label: "10.000.000",
      key: "9",
    },
    {
      label: "20.000.000",
      key: "10",
    },

    {
      label: "50.000.000",
      key: "11",
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <StyledHeader>
          <TopUpPackageIcon /> &nbsp; Gói nạp
        </StyledHeader>

        <StyledBody>
          {items.map((el) => {
            return (
              <StyledItemList
                key={el.key}
                onClick={() => setActive(el.key)}
                active={el.key === active}
              >
                <span>
                  <CentIcon />
                </span>
                &nbsp; {el.label}
              </StyledItemList>
            );
          })}
        </StyledBody>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default TopUpPackage;
