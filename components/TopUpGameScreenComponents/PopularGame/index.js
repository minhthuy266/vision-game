import {
  PopularGameContainer,
  StyledBody,
  StyledSectionWrapper,
} from "./styles";
import { StyledWrapper } from "styles/styles";
import GameConsole from "public/assets/icons/GameConsole";
import Image from "next/image";
import GameItem1 from "public/assets/images/HomeScreen_ListGame_Item1.png";
import GameItem2 from "public/assets/images/HomeScreen_ListGame_Item2.png";
import GameItem3 from "public/assets/images/HomeScreen_ListGame_Item3.png";
import GameItem4 from "public/assets/images/HomeScreen_ListGame_Item4.png";
import GameItem5 from "public/assets/images/HomeScreen_ListGame_Item5.png";
import GameItem6 from "public/assets/images/HomeScreen_ListGame_Item6.png";

const PopularGame = () => {
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
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <PopularGameContainer>
          <GameConsole /> &nbsp; Game phổ biến
        </PopularGameContainer>

        <StyledBody>
          {gameList.map((el) => {
            return (
              <div key={el.id}>
                <div>
                  <Image src={el.img} alt={el.name} />
                </div>

                <div style={{ marginTop: "0.6rem" }}>{el.name}</div>
              </div>
            );
          })}
        </StyledBody>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default PopularGame;
