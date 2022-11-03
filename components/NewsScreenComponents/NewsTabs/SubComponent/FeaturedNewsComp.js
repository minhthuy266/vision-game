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

const FeaturedNewsComp = () => {
  return (
    <FeaturedNewsContainer>
      <StyledHeader style={{ marginBottom: "0" }}>
        <SpeakerIcon /> &nbsp; Tin tức xem nhiều nhất
      </StyledHeader>

      <StyledBodyFeaturedNewsList>
        <div>
          <Image src={FeaturedNews} alt="Featured News" />
        </div>

        <StyledFeaturedNewsItemDate>
          15/08/2022 16:40
        </StyledFeaturedNewsItemDate>

        <StyledFeaturedNewsItemTitle>
          Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane
        </StyledFeaturedNewsItemTitle>
      </StyledBodyFeaturedNewsList>

      <StyledBodyFeaturedNewsList>
        <div>
          <Image src={FeaturedNews} alt="Featured News" />
        </div>

        <StyledFeaturedNewsItemDate>
          15/08/2022 16:40
        </StyledFeaturedNewsItemDate>

        <StyledFeaturedNewsItemTitle>
          Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane
        </StyledFeaturedNewsItemTitle>
      </StyledBodyFeaturedNewsList>

      <StyledBodyFeaturedNewsList>
        <div>
          <Image src={FeaturedNews} alt="Featured News" />
        </div>

        <StyledFeaturedNewsItemDate>
          15/08/2022 16:40
        </StyledFeaturedNewsItemDate>

        <StyledFeaturedNewsItemTitle>
          Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane
        </StyledFeaturedNewsItemTitle>
      </StyledBodyFeaturedNewsList>

      <StyledBodyFeaturedNewsList>
        <div>
          <Image src={FeaturedNews} alt="Featured News" />
        </div>

        <StyledFeaturedNewsItemDate>
          15/08/2022 16:40
        </StyledFeaturedNewsItemDate>

        <StyledFeaturedNewsItemTitle>
          Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane
        </StyledFeaturedNewsItemTitle>
      </StyledBodyFeaturedNewsList>

      <StyledBodyFeaturedNewsList>
        <div>
          <Image src={FeaturedNews} alt="Featured News" />
        </div>

        <StyledFeaturedNewsItemDate>
          15/08/2022 16:40
        </StyledFeaturedNewsItemDate>

        <StyledFeaturedNewsItemTitle>
          Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane
        </StyledFeaturedNewsItemTitle>
      </StyledBodyFeaturedNewsList>
    </FeaturedNewsContainer>
  );
};

export default FeaturedNewsComp;
