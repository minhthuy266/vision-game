import { Tabs } from "antd";
import { getNews } from "feature/newsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

import MainNewsComponent from "./MainNewsComponent";
import { StyledTabsWrapper, StyledWrapper } from "./styles";

const NewsTabs = ({
  allNews,
  hotNews,
  newGameNews,
  eventNews,
  promoteNews,
  mostViewNews,
}) => {
  const [category, setCategory] = useState("tat_ca");

  const onChange = (key) => {
    console.log(key);

    setCategory(key);
  };

  return (
    <StyledWrapper>
      <StyledTabsWrapper>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `Tất Cả`,
              key: "tat_ca",
              children: (
                <MainNewsComponent
                  data={allNews.list}
                  total={allNews.total}
                  mostViewNews={mostViewNews}
                  category={category}
                />
              ),
              href: "news/all-news",
            },
            {
              label: `Tin Nóng`,
              key: "tin_nong",
              children: (
                <MainNewsComponent
                  data={hotNews.list}
                  total={hotNews.total}
                  mostViewNews={mostViewNews}
                  category={category}
                />
              ),
              href: "news/all-news",
            },
            {
              label: `Game Mới`,
              key: "game_moi",
              children: (
                <MainNewsComponent
                  data={newGameNews.list}
                  total={newGameNews.total}
                  mostViewNews={mostViewNews}
                  category={category}
                />
              ),
              href: "news/all-news",
            },

            {
              label: `Sự kiện`,
              key: "su_kien",
              children: (
                <MainNewsComponent
                  data={eventNews.list}
                  total={eventNews.total}
                  mostViewNews={mostViewNews}
                  category={category}
                />
              ),
            },

            {
              label: `Ưu đãi`,
              key: "uu_dai",
              children: (
                <MainNewsComponent
                  data={promoteNews.list}
                  total={hotNews.total}
                  mostViewNews={mostViewNews}
                  category={category}
                />
              ),
            },
          ]}
        />
      </StyledTabsWrapper>
    </StyledWrapper>
  );
};

export default NewsTabs;
