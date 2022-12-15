import Image from "next/image";
import SpeakerIcon from "public/assets/icons/SpeakerIcon";
import React from "react";
import {
  FeaturedNewsContainer,
  StyledBodyFeaturedNewsList,
  StyledFeaturedNewsItemDate,
  StyledFeaturedNewsItemTitle,
  StyledHeader,
} from "./styles";
import FeaturedNews from "public/assets/images/NewsScreen_FeaturedNewsItem1.png";
import Link from "next/link";

const FeaturedNewsComp = ({ mostViewNews }) => {
  console.log("object", mostViewNews);

  return (
    <FeaturedNewsContainer>
      <StyledHeader style={{ marginBottom: "0" }}>
        <SpeakerIcon /> Tin tức xem nhiều nhất
      </StyledHeader>

      {mostViewNews?.news_details?.slice(0, 6).map((el) => {
        return (
          <Link href="/news/news-detail" key={el._id}>
            <StyledBodyFeaturedNewsList>
              <div>
                <Image
                  src={el.image}
                  alt="Featured News"
                  width={100}
                  height={100}
                />
              </div>

              <StyledFeaturedNewsItemDate>
                {el.publish_date}
              </StyledFeaturedNewsItemDate>

              <StyledFeaturedNewsItemTitle>
                {el.title}
              </StyledFeaturedNewsItemTitle>
            </StyledBodyFeaturedNewsList>
          </Link>
        );
      })}
    </FeaturedNewsContainer>
  );
};

export default FeaturedNewsComp;
