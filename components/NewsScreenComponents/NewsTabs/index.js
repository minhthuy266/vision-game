import { Tabs } from "antd";
import { StyledWrapper } from "styles/styles";
import MainNewsComponent from "./MainNewsComponent";
import { StyledTabsWrapper } from "./styles";

const NewsTabs = () => {
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
              children: <MainNewsComponent />,
              href: "news/all-news",
            },
            {
              label: `Tin Nóng`,
              key: "2",
              children: <MainNewsComponent />,
              href: "news/all-news",
            },
            {
              label: `Game Mới`,
              key: "3",
              children: <MainNewsComponent />,
              href: "news/all-news",
            },

            {
              label: `Sự kiện`,
              key: "4",
              children: <MainNewsComponent />,
            },

            {
              label: `Ưu đãi`,
              key: "5",
              children: <MainNewsComponent />,
            },
          ]}
        />
      </StyledTabsWrapper>
    </StyledWrapper>
  );
};

export default NewsTabs;
