import React from "react";
import HeaderSection from "../HeaderSection";
import { StyledList, StyledSectionWrapper } from "./styles";
import GameItem1 from "public/assets/images/HomeScreen_ListGame_Item1.png";
import GameItem2 from "public/assets/images/HomeScreen_ListGame_Item2.png";
import GameItem3 from "public/assets/images/HomeScreen_ListGame_Item3.png";
import GameItem4 from "public/assets/images/HomeScreen_ListGame_Item4.png";
import GameItem5 from "public/assets/images/HomeScreen_ListGame_Item5.png";
import GameItem6 from "public/assets/images/HomeScreen_ListGame_Item6.png";
import GameItem7 from "public/assets/images/HomeScreen_ListGame_Item7.png";
import GameItem8 from "public/assets/images/HomeScreen_ListGame_Item8.png";
import GameItem9 from "public/assets/images/HomeScreen_ListGame_Item9.png";
import GameItem10 from "public/assets/images/HomeScreen_ListGame_Item10.png";
import GameItem11 from "public/assets/images/HomeScreen_ListGame_Item11.png";
import GameItem12 from "public/assets/images/HomeScreen_ListGame_Item12.png";
import GameItem13 from "public/assets/images/HomeScreen_ListGame_Item13.png";
import GameItem14 from "public/assets/images/HomeScreen_ListGame_Item14.png";
import GameItem15 from "public/assets/images/HomeScreen_ListGame_Item15.png";
import GameItem16 from "public/assets/images/HomeScreen_ListGame_Item16.png";

import Image from "next/image";
import { StyledWrapper } from "styles/styles";
import Link from "next/link";

const GameList = () => {
  const gameList = [
    {
      id: 1,
      name: "Vĩnh Hằng Kỷ Nguyên",
      img: GameItem1,
    },

    {
      id: 2,
      name: "Westward: Tây Du Đại Thoại",
      img: GameItem2,
    },

    {
      id: 3,
      name: "Linh Giới 3D - Soul World",
      img: GameItem3,
    },

    {
      id: 4,
      name: "Thiên Ngoại Giang Hồ",
      img: GameItem4,
    },

    {
      id: 5,
      name: "Kiếm Ma 3D",
      img: GameItem5,
    },

    {
      id: 6,
      name: "Nhất Kiếm Giang Hồ Mobile",
      img: GameItem6,
    },

    {
      id: 7,
      name: "Dân Chơi Tam Quốc",
      img: GameItem7,
    },

    {
      id: 8,
      name: "MU: Vinh Dự",
      img: GameItem8,
    },

    {
      id: 9,
      name: "Soul Land: Đấu La Đại Lục",
      img: GameItem9,
    },

    {
      id: 10,
      name: "Đế Vương Tam Quốc",
      img: GameItem10,
    },

    {
      id: 11,
      name: "Tình Kiếm 3D",
      img: GameItem11,
    },

    {
      id: 12,
      name: "Kỳ Nữ Hoàng Cung",
      img: GameItem12,
    },

    {
      id: 13,
      name: "Vua Tam Quốc",
      img: GameItem13,
    },

    {
      id: 14,
      name: "Phong Khởi Trường An",
      img: GameItem14,
    },

    {
      id: 15,
      name: "Thần Kiếm Mobile",
      img: GameItem15,
    },

    {
      id: 16,
      name: "Giang Hồ Chi Mộng - Tuyệt Thế Võ Lâm",
      img: GameItem16,
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Danh sách game" />

        <StyledList>
          {gameList.map((el) => {
            return (
              <div key={el.id}>
                <Link href={`game/vinh-hang-ky-nguyen`}>
                  <div>
                    <Image src={el.img} alt={el.name} />
                  </div>

                  <div style={{ marginTop: "0.6rem" }}>{el.name}</div>
                </Link>
              </div>
            );
          })}
        </StyledList>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default GameList;
