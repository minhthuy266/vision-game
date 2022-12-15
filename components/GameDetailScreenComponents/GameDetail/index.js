import PopularGame from "@/components/TopUpGameScreenComponents/PopularGame";
import { Rate } from "antd";
import Image from "next/image";
import { StyledWrapper } from "styles/styles";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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

const GameDetail = ({ gameDetails }) => {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>{gameDetails.name}</StyledTitle>

        <StyledGenre>Thể loại: {gameDetails.categories}</StyledGenre>

        <StyledStar>
          <Rate disabled allowHalf defaultValue={4.5} />
          <span className="ant-rate-text">
            {gameDetails.average} - 99 đánh giá
          </span>
        </StyledStar>

        <StyledDescription>
          <StyledDescriptionLeft>
            <p
              dangerouslySetInnerHTML={{ __html: gameDetails?.introduction }}
            ></p>

            <p
              dangerouslySetInnerHTML={{ __html: gameDetails?.description }}
            ></p>

            {gameDetails?.image_slide?.length > 0 && (
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
                  {gameDetails?.image_slide?.map((el) => {
                    return (
                      <SwiperSlide key={el}>
                        <Image
                          src={el}
                          alt="Slider Image"
                          width={380}
                          height={250}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </StyledSlider>
            )}
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
