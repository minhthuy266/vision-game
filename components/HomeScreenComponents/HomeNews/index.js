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

const HomeNews = ({ homeNewsList }) => {
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
        <HeaderSection href="/news" title="Tin tức - Sự kiện" hasViewAllBtn />
        <Link href={`/news/${homeNewsList?.news_details?.[0]._id}`}>
          <StyledTopNews>
            <div>
              <Image
                src={homeNewsList?.news_details?.[0].image}
                alt="News Item 1"
                width={100}
                height={100}
              />
            </div>

            <div>
              <StyledTopNewsTitle>
                {homeNewsList?.news_details?.[0].title}
              </StyledTopNewsTitle>

              <div>
                <StyledTopNewsExcerpt>
                  {homeNewsList?.news_details?.[0].excerpt}
                </StyledTopNewsExcerpt>
              </div>
            </div>
          </StyledTopNews>
        </Link>

        <StyledNewsList>
          {homeNewsList?.news_details?.slice(1).map((el) => {
            return (
              <div key={el._id}>
                <Link href={`/news/${el._id}`}>
                  <>
                    <div>
                      <Image
                        src={el.image}
                        alt={el.title}
                        width={200}
                        height={200}
                      />
                    </div>

                    <StyledCardBody>
                      <StyledCardBodyDate>
                        {el.publish_date.toLocaleString()}
                      </StyledCardBodyDate>
                      <StyledCardBodyTitle>{el.title}</StyledCardBodyTitle>
                    </StyledCardBody>
                  </>
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
