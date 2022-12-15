import Image from "next/image";
import SpeakerIcon from "public/assets/icons/SpeakerIcon";
import React from "react";
import {
  StyledBodyNewsList,
  StyledHeader,
  StyledNewsItem,
  StyledNewsItemDate,
  StyledNewsItemExcerpt,
  StyledNewsItemTitle,
} from "./styles";
import NewsItem from "public/assets/images/NewsScreen_NewsItem1.png";
import Link from "next/link";

const NewsListComp = ({ data }) => {
  console.log("DDDD", data);

  return (
    <div>
      <StyledHeader>
        <SpeakerIcon /> &nbsp; Tin tức
      </StyledHeader>

      <StyledBodyNewsList>
        {data?.news_details?.map((el) => {
          return (
            <Link href={`news/${el._id}`} key={el._id}>
              <StyledNewsItem>
                <Image
                  src={el.image}
                  alt="News Item"
                  width={100}
                  height={100}
                />

                <div>
                  <StyledNewsItemTitle>{el.title}</StyledNewsItemTitle>

                  <StyledNewsItemDate>{el.publish_date}</StyledNewsItemDate>

                  <StyledNewsItemExcerpt>{el.excerpt}</StyledNewsItemExcerpt>
                </div>
              </StyledNewsItem>
            </Link>
          );
        })}
      </StyledBodyNewsList>
    </div>
  );
};

export default NewsListComp;
