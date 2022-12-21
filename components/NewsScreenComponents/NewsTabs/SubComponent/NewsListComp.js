import { Pagination } from "antd";
import {
  getAllNews,
  getEventNews,
  getHotNews,
  getNewGameNews,
  getNews,
  getPromoteNews,
  handleNewsTab,
  handleReset,
} from "feature/newsSlice";
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
import * as postConst from "constant/data";

const NewsListComp = ({ data, category, total }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [dataNews, setDataNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {
    newsList,
    totalNews,
    allNews,
    hotNews,
    newGameNews,
    eventNews,
    promoteNews,
  } = useSelector((state) => state.news);

  useEffect(() => {
    if (page > 1) {
      if (category === "tat_ca") {
        setDataNews(allNews?.list);
        setCurrentPage(allNews?.currentPage);
        setTotalPages(allNews?.total);
      } else if (category === "tin_nong") {
        setDataNews(hotNews?.list);
        setCurrentPage(hotNews?.currentPage);
        setTotalPages(hotNews?.total);
      } else if (category === "game_moi") {
        setDataNews(newGameNews?.list);
        setCurrentPage(newGameNews?.currentPage);
        setTotalPages(newGameNews?.total);
      } else if (category === "su_kien") {
        setDataNews(eventNews?.list);
        setCurrentPage(eventNews?.currentPage);
        setTotalPages(eventNews?.total);
      } else if (category === "uu_dai") {
        setDataNews(promoteNews?.list);
        setCurrentPage(promoteNews?.currentPage);
        setTotalPages(promoteNews?.total);
      }
    } else {
      setDataNews(data?.news_details);
    }
  }, [
    allNews,
    category,
    data?.news_details,
    eventNews,
    hotNews,
    newGameNews,
    newsList?.news_details,
    page,
    promoteNews,
  ]);

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
          pageSize={postConst.POST_PER_PAGE}
          current={currentPage}
          onChange={(page) => {
            setPage(page);
            dispatch(
              handleNewsTab({
                currentPage: page,
                category,
              })
            );

            if (page > 1) {
              if (category === "tat_ca") {
                dispatch(getAllNews({ page }));
              } else if (category === "tin_nong") {
                dispatch(getHotNews({ page }));
              } else if (category === "game_moi") {
                dispatch(getNewGameNews({ page }));
              } else if (category === "su_kien") {
                dispatch(getEventNews({ page }));
              } else if (category === "uu_dai") {
                dispatch(getPromoteNews({ page }));
              }
            }
          }}
        />
      </StyledPagination>
    </div>
  );
};

export default NewsListComp;
