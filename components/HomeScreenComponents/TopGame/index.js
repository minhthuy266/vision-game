import HeaderSection from "../HeaderSection";
import { StyledSectionWrapper, StyledWrapper } from "./styles";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "public/assets/images/HomeScreen_TopGame1.png";
import Image2 from "public/assets/images/HomeScreen_TopGame2.png";
import Image3 from "public/assets/images/HomeScreen_TopGame3.png";
import Image from "next/image";

const TopGame = () => {
  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Game Hot" />
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image src={Image1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} alt="Image 3" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={Image1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} alt="Image 3" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={Image1} alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} alt="Image 3" />
          </SwiperSlide>
        </Swiper>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default TopGame;
