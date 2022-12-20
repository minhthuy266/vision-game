import { Pagination } from "antd";
import { getNews, handleReset } from "feature/newsSlice";
import Image from "next/image";
import Link from "next/link";
import SpeakerIcon from "public/assets/icons/SpeakerIcon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledBodyNewsList,
  StyledHeader,
  StyledNewsItem,
  StyledNewsItemDate,
  StyledNewsItemExcerpt,
  StyledNewsItemTitle,
  StyledPagination,
} from "./styles";

const NewsListComp = ({ data, category, total }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [dataNews, setDataNews] = useState([]);

  const { newsList, totalNews } = useSelector((state) => state.news);

  useEffect(() => {
    if (page > 1) {
      setDataNews(newsList?.news_details);
    } else {
      setDataNews(data?.news_details);
    }
  }, [data?.news_details, newsList?.news_details, page]);

  return (
    <div>
      <StyledHeader>
        <SpeakerIcon /> &nbsp; Tin tức
      </StyledHeader>

      <StyledBodyNewsList>
        {dataNews
          ?.filter((item) => item !== null)
          .map((el) => {
            return (
              <Link href={`news/${el?._id}`} key={el._id}>
                <StyledNewsItem>
                  <Image
                    src={
                      el.image === null
                        ? "https://picsum.photos/seed/picsum/200/300"
                        : el.image
                    }
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

      <StyledPagination>
        <Pagination
          simple
          total={total}
          pageSize={10}
          onChange={(page) => {
            setPage(page);

            if (page > 1) {
              dispatch(handleReset());

              dispatch(
                getNews({
                  page,
                  category,
                })
              );
            }
          }}
        />
      </StyledPagination>
    </div>
  );
};

export default NewsListComp;
