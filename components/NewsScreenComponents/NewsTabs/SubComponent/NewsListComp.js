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

const NewsListComp = () => {
  return (
    <div>
      <StyledHeader>
        <SpeakerIcon /> &nbsp; Tin tức
      </StyledHeader>

      <StyledBodyNewsList>
        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>

        <Link href="/news/news-detail">
          <StyledNewsItem>
            <Image src={NewsItem} alt="News Item" />

            <div>
              <StyledNewsItemTitle>
                Cùng ROG mừng sinh nhật 10 năm Liên Minh Huyền Thoại tại Việt
                Nam!
              </StyledNewsItemTitle>

              <StyledNewsItemDate>08/08/2022 18:00</StyledNewsItemDate>

              <StyledNewsItemExcerpt>
                Tham gia ngay thôi nào!! Hòa cùng không khí sinh nhật Liên Minh
                Huyền Thoại lần thứ 10, ASUS hân hạnh đồng hành cùng Liên Minh
                Huyền Thoại mang đến cho người dung cợ hội sỡ hữu những skin
                tướng siêu hiếm trong dịp đặc biệt này.
              </StyledNewsItemExcerpt>
            </div>
          </StyledNewsItem>
        </Link>
      </StyledBodyNewsList>
    </div>
  );
};

export default NewsListComp;
