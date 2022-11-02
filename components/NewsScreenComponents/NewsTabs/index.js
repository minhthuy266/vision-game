import { Tabs } from "antd";
import Link from "next/link";
import { StyledWrapper } from "styles/styles";
import { StyledTabsWrapper } from "./styles";

const NewsTabs = () => {
  return (
    <StyledWrapper>
      <StyledTabsWrapper>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tất Cả" key="1">
            <Link href="/news/all-news"></Link>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tin Nóng" key="2"></Tabs.TabPane>
          <Tabs.TabPane tab="Game Mới" key="3"></Tabs.TabPane>
          <Tabs.TabPane tab="Sự Kiện" key="4"></Tabs.TabPane>
          <Tabs.TabPane tab="Ưu Đãi" key="5"></Tabs.TabPane>
        </Tabs>
      </StyledTabsWrapper>
    </StyledWrapper>
  );
};

export default NewsTabs;
