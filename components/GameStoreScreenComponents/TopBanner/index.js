import Image from "next/image";
import Banner1 from "public/assets/images/GameStoreScreen_TopBanner1.png";
import Banner2 from "public/assets/images/GameStoreScreen_TopBanner2.png";
import Banner3 from "public/assets/images/GameStoreScreen_TopBanner3.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledWrapper } from "./styles";

const TopBanner = () => {
  return (
    <StyledWrapper>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Banner1} alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner3} alt="Banner 3" />
        </SwiperSlide>
      </Swiper>
    </StyledWrapper>
  );
};

export default TopBanner;
