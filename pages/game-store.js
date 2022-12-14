import GameListTab from "@/components/GameStoreScreenComponents/GameList";
import TopBanner from "@/components/GameStoreScreenComponents/TopBanner";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import { withSessionSsr } from "lib/withSession";
import Head from "next/head";
import React from "react";

const GameStoreScreen = () => {
  return (
    <>
      <Head>
        <title>Kho Game</title>
      </Head>
      <div>
        <TopBanner />
        <TopGame />
        <GameListTab />
      </div>
    </>
  );
};

export default GameStoreScreen;
