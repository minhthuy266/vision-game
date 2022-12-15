import { Tabs } from "antd";
import { StyledWrapper } from "styles/styles";
import GameTab from "./GameTab";
import { StyledTabsWrapper } from "./styles";

const GameListTab = ({
  h5GameList,
  miniGameList,
  rolePlayingGameList,
  allGameList,
}) => {
  const tabs = [
    {
      id: "1",
      tabName: "Tất cả",
      data: allGameList,
    },

    {
      id: "2",
      tabName: "Game H5",
      data: h5GameList,
    },

    {
      id: "3",
      tabName: "Mini Game",
      data: miniGameList,
    },

    {
      id: "4",
      tabName: "Nhập Vai",
      data: rolePlayingGameList,
    },
  ];

  return (
    <StyledWrapper>
      <StyledTabsWrapper>
        <Tabs defaultActiveKey="1">
          {tabs.map((el) => {
            return (
              <Tabs.TabPane tab={el.tabName} key={el.id}>
                <GameTab data={el.data} />
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </StyledTabsWrapper>
    </StyledWrapper>
  );
};

export default GameListTab;
