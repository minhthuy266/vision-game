import Image from "next/image";
import Link from "next/link";
import NewsItem1 from "public/assets/images/HomeScreen_NewsItem1.png";
import NewsItem2 from "public/assets/images/HomeScreen_NewsItem2.png";
import NewsItem3 from "public/assets/images/HomeScreen_NewsItem3.png";
import NewsItem4 from "public/assets/images/HomeScreen_NewsItem4.png";
import NewsItem5 from "public/assets/images/HomeScreen_NewsItem5.png";
import NewsItem6 from "public/assets/images/HomeScreen_NewsItem6.png";
import NewsItem7 from "public/assets/images/HomeScreen_NewsItem7.png";
import NewsItem8 from "public/assets/images/HomeScreen_NewsItem8.png";
import NewsItem9 from "public/assets/images/HomeScreen_NewsItem9.png";
import { StyledWrapper } from "styles/styles";
import HeaderSection from "../HeaderSection";
import {
  StyledCardBody,
  StyledCardBodyDate,
  StyledCardBodyTitle,
  StyledNewsList,
  StyledSectionWrapper,
  StyledTopNews,
  StyledTopNewsExcerpt,
  StyledTopNewsTitle,
} from "./styles";

const HomeNews = () => {
  const newsList = [
    {
      id: 2,
      title:
        "Tất tần tật những bất ngờ hấp dẫn trong chuỗi sự kiện RiotX Arcane",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem2,
    },

    {
      id: 3,
      title:
        "Cải tiến Lõi Công Nghệ trong Đấu Trường Chân Lý bản Thành Phố Ngầm",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem3,
    },

    {
      id: 4,
      title:
        'Top 3 tộc - hệ mang tính chất "may rủi" cao nhất tại Đấu Trường Chân Lý mùa...',
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem4,
    },

    {
      id: 5,
      title:
        "Linh Thú Chibi Champions mới đắt còn hơn skin Huyền Thoại, cộng đồng ĐTCL...",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem5,
    },

    {
      id: 6,
      title:
        'Nhìn lại phiên bản đầu tiên của LMHT, game thủ không khỏi bất ngờ: "Nhiều cơ..."',
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem6,
    },

    {
      id: 7,
      title:
        'Top 3 cơ chế "siêu ảo" lần đầu tiên xuất hiện tại Đấu Trường Chân Lý mùa 6',
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem7,
    },

    {
      id: 8,
      title:
        "Mỗi ô đất trong game Chiến Vương Tam Quốc là một cuộc tranh giành đầy khốc...",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem8,
    },

    {
      id: 9,
      title:
        "Cáp quang lại đứt, cùng nhìn lại những game offline huyền thoại, ngày mà cùng nhìn lại những game offline huyền thoại",
      excerpt:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque possimus tenetur error eius velit reprehenderit natus. Iure, cupiditate ducimus?",
      img: NewsItem9,
    },
  ];

  return (
    <StyledWrapper>
      <StyledSectionWrapper>
        <HeaderSection href="/" title="Tin tức - Sự kiện" />
        <Link href="/news/news-detail">
          <StyledTopNews>
            <div>
              <Image src={NewsItem1} alt="News Item 1" />
            </div>

            <div>
              <StyledTopNewsTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledTopNewsTitle>

              <div>
                <StyledTopNewsExcerpt>
                  Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên
                  Minh Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên
                  Minh Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những
                  skin tướng siêu hiếm trong dịp đặc biệt này.
                </StyledTopNewsExcerpt>
              </div>
            </div>
          </StyledTopNews>
        </Link>

        <StyledNewsList>
          {newsList.map((el) => {
            return (
              <div key={el.id}>
                <Link href="/news/news-detail">
                  <div>
                    <Image src={el.img} alt={el.name} />
                  </div>

                  <StyledCardBody>
                    <StyledCardBodyDate>15/08/2022 23:59</StyledCardBodyDate>
                    <StyledCardBodyTitle>{el.title}</StyledCardBodyTitle>
                  </StyledCardBody>
                </Link>
              </div>
            );
          })}
        </StyledNewsList>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

export default HomeNews;
