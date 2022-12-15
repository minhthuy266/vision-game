import Image from "next/image";
import Link from "next/link";
import Image1 from "public/assets/images/HomeScreen_TopGame1.png";
import Image2 from "public/assets/images/HomeScreen_TopGame2.png";
import Image3 from "public/assets/images/HomeScreen_TopGame3.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeaderSection from "../HeaderSection";
import { StyledSectionWrapper, StyledWrapper } from "./styles";

const TopGame = ({ topGameList }) => {
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
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {topGameList?.intro?.map((el) => {
            return (
              <SwiperSlide key={el._id}>
                <Link href={`game/${el._id}`}>
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
