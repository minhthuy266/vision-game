import { Tabs } from "antd";

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
  const onChange = (key) => {
    console.log(key);
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
              key: "1",
              children: (
                <MainNewsComponent data={allNews} mostViewNews={mostViewNews} />
              ),
              href: "news/all-news",
            },
            {
              label: `Tin Nóng`,
              key: "2",
              children: (
                <MainNewsComponent data={hotNews} mostViewNews={mostViewNews} />
              ),
              href: "news/all-news",
            },
            {
              label: `Game Mới`,
              key: "3",
              children: (
                <MainNewsComponent
                  data={newGameNews}
                  mostViewNews={mostViewNews}
                />
              ),
              href: "news/all-news",
            },

            {
              label: `Sự kiện`,
              key: "4",
              children: (
                <MainNewsComponent
                  data={eventNews}
                  mostViewNews={mostViewNews}
                />
              ),
            },

            {
              label: `Ưu đãi`,
              key: "5",
              children: (
                <MainNewsComponent
                  data={promoteNews}
                  mostViewNews={mostViewNews}
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
