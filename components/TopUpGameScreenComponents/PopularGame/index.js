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
import Link from "next/link";
import { useRouter } from "next/router";

const PopularGame = ({ topGameList }) => {
  const router = useRouter();

  console.log("sss", router.asPath.replace("/game/", ""));

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
          {topGameList?.intro
            ?.filter((item) => item._id !== router.asPath.replace("/game/", ""))
            .map((el) => {
              return (
                <div key={el._id}>
                  <Link href={`/game/${el._id}`}>
                    <>
                      <div>
                        <Image
                          src={
                            el.logo === null
                              ? "https://picsum.photos/seed/picsum/200/300"
                              : el.logo
                          }
                          alt={el.name}
                          width={100}
                          height={100}
                        />
                      </div>

                      <div style={{ marginTop: "0.6rem" }}>{el.name}</div>
                    </>
                  </Link>
                </div>
              );
            })}
        </StyledBody>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default PopularGame;
