import Image from "next/image";
import React from "react";
import HeaderSection from "../HeaderSection";
import { StyledWrapper } from "../TopGame/styles";
import { StyledNewsList, StyledSectionWrapper, StyledTopNews } from "./styles";
import NewsItem1 from "public/assets/images/HomeScreen_NewsItem1.png";
import NewsItem2 from "public/assets/images/HomeScreen_NewsItem2.png";
import NewsItem3 from "public/assets/images/HomeScreen_NewsItem3.png";
import NewsItem4 from "public/assets/images/HomeScreen_NewsItem4.png";
import NewsItem5 from "public/assets/images/HomeScreen_NewsItem5.png";
import NewsItem6 from "public/assets/images/HomeScreen_NewsItem6.png";
import NewsItem7 from "public/assets/images/HomeScreen_NewsItem7.png";
import NewsItem8 from "public/assets/images/HomeScreen_NewsItem8.png";
import NewsItem9 from "public/assets/images/HomeScreen_NewsItem9.png";
import NewsItem10 from "public/assets/images/HomeScreen_NewsItem10.png";

const HomeNews = () => {
  const newsList = [
    {
      id: 2,
      title: "Westward: Tây Du Đại Thoại",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem2,
    },

    {
      id: 3,
      title: "Linh Giới 3D - Soul World",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem3,
    },

    {
      id: 4,
      title: "Thiên Ngoại Giang Hồ",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem4,
    },

    {
      id: 5,
      title: "Kiếm Ma 3D",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem5,
    },

    {
      id: 6,
      title: "Nhất Kiếm Giang Hồ Mobile",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem6,
    },

    {
      id: 7,
      title: "Dân Chơi Tam Quốc",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem7,
    },

    {
      id: 8,
      title: "MU: Vinh Dự",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem8,
    },

    {
      id: 9,
      title: "Soul Land: Đấu La Đại Lục",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem9,
    },

    {
      id: 10,
      title: "Đế Vương Tam Quốc",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem10,
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Tin tức - Sự kiện" />
        <StyledTopNews>
          <div>
            <Image src={NewsItem1} alt="News Item 1" />
          </div>
        </StyledTopNews>

        <StyledNewsList>
          {newsList.map((el) => {
            return (
              <div key={el.id}>
                <div>
                  <Image src={el.img} alt={el.name} />
                </div>

                <div>{el.title}</div>

                <div>{el.excerpt}</div>
              </div>
            );
          })}
        </StyledNewsList>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default HomeNews;
