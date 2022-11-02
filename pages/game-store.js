import GameListTab from "@/components/GameStoreScreenComponents/GameList";
import TopBanner from "@/components/GameStoreScreenComponents/TopBanner";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import React from "react";

const GameStoreScreen = () => {
  return (
    <div>
      <TopBanner />
      <TopGame />
      <GameListTab />
    </div>
  );
};

export default GameStoreScreen;
