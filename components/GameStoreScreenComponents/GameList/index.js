import { Tabs } from "antd";
import { StyledWrapper } from "styles/styles";
import GameTab from "./GameTab";
import { StyledTabsWrapper } from "./styles";

const GameListTab = () => {
  const tabs = [
    {
      id: "1",
      tabName: "Tất cả",
    },

    {
      id: "2",
      tabName: "Game H5",
    },

    {
      id: "3",
      tabName: "Mini Game",
    },

    {
      id: "4",
      tabName: "Nhập Vai",
    },
  ];

  return (
    <StyledWrapper>
      <StyledTabsWrapper>
        <Tabs defaultActiveKey="1">
          {tabs.map((el) => {
            return (
              <Tabs.TabPane tab={el.tabName} key={el.id}>
                <GameTab />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </StyledTabsWrapper>
    </StyledWrapper>
  );
};

export default GameListTab;
