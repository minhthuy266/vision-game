import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { StyledWrapper } from "styles/styles";
import {
  StyledDescription,
  StyledDescriptionLeft,
  StyledDescriptionRight,
  StyledGenre,
  StyledJoinCommunity,
  StyledSlider,
  StyledStar,
  StyledTitle,
} from "./styles";
import { Rate } from "antd";
import SliderImg from "public/assets/images/GameDetailScreen_Slider1.png";
import Image from "next/image";
import PopularGame from "@/components/TopUpGameScreenComponents/PopularGame";

const GameDetail = () => {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>Vĩnh Hằng Kỷ Nguyên</StyledTitle>

        <StyledGenre>Thể loại: MMORPG</StyledGenre>

        <StyledStar>
          <Rate disabled allowHalf defaultValue={4.5} />
          <span className="ant-rate-text">4.5 - 99 đánh giá</span>
        </StyledStar>

        <StyledDescription>
          <StyledDescriptionLeft>
            <strong>Mô tả</strong>

            <p>
              Trở lại thế giới châu âu thời kỳ Trung Cổ Bắt đầu cuộc du hành tìm
              kiếm nhẫn ma!
            </p>

            <strong>Giới thiệu</strong>

            <p>
              Game MMOARPG hắc ám chất nhất, các tính năng xoay quanh “diệt quái
              săn báu” được phát triển công phu. Game phát triển xoay quanh 25
              chiếc nhẫn ma bị thất lạc, mỗi chiếc nhẫn ẩn chứa sức mạnh khủng
              khiếp, muốn sở hữu sức mạnh đó, bạn không những phải tìm ra nó, mà
              còn phải vượt qua thử thách của chúa nhẫn. Ngoài ra tìm kiếm nhẫn
              ma cùng với thần thú, bạn còn có thể tự do tổ đội, PK săn quái mọi
              lúc mọi nơi, chiến đấu cùng với anh em chiến minh, giết boss thế
              giới để lấy trang bị đi chợ mua bán, tích lũy của cải!!!
            </p>

            <StyledSlider>
              <Swiper
                slidesPerView={"auto"}
                loop={true}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={SliderImg} alt="Slider Image" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={SliderImg} alt="Slider Image" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={SliderImg} alt="Slider Image" />
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={SliderImg} alt="Slider Image" />
                </SwiperSlide>
              </Swiper>
            </StyledSlider>
          </StyledDescriptionLeft>

          <StyledDescriptionRight>
            <StyledJoinCommunity>Gia nhập cộng đồng</StyledJoinCommunity>
          </StyledDescriptionRight>
        </StyledDescription>
      </StyledWrapper>

      <PopularGame />
    </>
  );
};

export default GameDetail;
