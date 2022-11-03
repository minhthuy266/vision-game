import Image from "next/image";
import Link from "next/link";
import Image1 from "public/assets/images/HomeScreen_TopGame1.png";
import Image2 from "public/assets/images/HomeScreen_TopGame2.png";
import Image3 from "public/assets/images/HomeScreen_TopGame3.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../HeaderSection";
import { StyledSectionWrapper, StyledWrapper } from "./styles";

const TopGame = () => {
  const gameList = [
    {
      id: 1,
      name: "",
      img: Image1,
      slug: "vinh-hang-ky-nguyen",
    },

    {
      id: 2,
      name: "",
      img: Image2,
      slug: "vinh-hang-ky-nguyen",
    },

    {
      id: 3,
      name: "",
      img: Image3,
      slug: "vinh-hang-ky-nguyen",
    },

    {
      id: 4,
      name: "",
      img: Image1,
      slug: "vinh-hang-ky-nguyen",
    },

    {
      id: 5,
      name: "",
      img: Image2,
      slug: "vinh-hang-ky-nguyen",
    },

    {
      id: 6,
      name: "",
      img: Image3,
      slug: "vinh-hang-ky-nguyen",
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Game Hot" />
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {gameList.map((el) => {
            return (
              <SwiperSlide key={el.id}>
                <Link href={`game/${el.slug}`}>
                  <Image src={el.img} alt={el.name} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default TopGame;
