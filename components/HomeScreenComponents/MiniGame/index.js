import React from "react";
import HeaderSection from "../HeaderSection";
import { StyledWrapper } from "../TopGame/styles";
import { StyledList, StyledSectionWrapper } from "./styles";
import MiniGame1 from "public/assets/images/HomeScreen_MiniGame1.png";
import MiniGame2 from "public/assets/images/HomeScreen_MiniGame2.png";
import MiniGame3 from "public/assets/images/HomeScreen_MiniGame3.png";
import MiniGame4 from "public/assets/images/HomeScreen_MiniGame4.png";
import MiniGame5 from "public/assets/images/HomeScreen_MiniGame5.png";
import MiniGame6 from "public/assets/images/HomeScreen_MiniGame6.png";
import Image from "next/image";

const MiniGame = () => {
  const miniGameList = [
    {
      id: 1,
      name: "IDLE GOG: Rise of Kings",
      img: MiniGame1,
    },

    {
      id: 2,
      name: "Idle Fish",
      img: MiniGame2,
    },

    {
      id: 3,
      name: "Winning Poker Instant",
      img: MiniGame3,
    },

    {
      id: 4,
      name: "Bắn Cá Ăn Xu",
      img: MiniGame4,
    },

    {
      id: 5,
      name: "Zombie Hunter",
      img: MiniGame5,
    },

    {
      id: 6,
      name: "Nông Trại Sôi Động",
      img: MiniGame6,
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Mini game" />

        <StyledList>
          {miniGameList.map((el) => {
            return (
              <div key={el.id}>
                <div>
                  <Image src={el.img} alt={el.name} />
                </div>

                <div style={{ marginTop: "0.6rem" }}>{el.name}</div>
              </div>
            );
          })}
        </StyledList>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default MiniGame;
