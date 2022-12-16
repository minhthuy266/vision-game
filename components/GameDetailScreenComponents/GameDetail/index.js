import TopGame from "@/components/HomeScreenComponents/TopGame";
import PopularGame from "@/components/TopUpGameScreenComponents/PopularGame";
import { Rate } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
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
  const { gameCategories } = useSelector((state) => state.game);

  const returnGameCategory = () => {
    return gameCategories.find(
      (element) => element.value === gameDetails.categories
    );
  };

  return (
    <>
      <StyledWrapper>
        <StyledTitle>{gameDetails.name}</StyledTitle>

        <StyledGenre>
          Thể loại: <span>{returnGameCategory()?.display}</span>
        </StyledGenre>

        <StyledStar>
          <Rate disabled allowHalf defaultValue={gameDetails.average} />
          <span className="ant-rate-text">
            {gameDetails.average} - {gameDetails.total_reviews} đánh giá
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
    </>
  );
};

export default GameDetail;
