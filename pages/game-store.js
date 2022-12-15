import GameListTab from "@/components/GameStoreScreenComponents/GameList";
import TopBanner from "@/components/GameStoreScreenComponents/TopBanner";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import { withSessionSsr } from "lib/withSession";
import Head from "next/head";
import React from "react";
import axios from "axios";

const GameStoreScreen = ({
  topGameList,
  h5GameList,
  miniGameList,
  rolePlayingGameList,
  allGameList,
}) => {
  return (
    <>
      <Head>
        <title>Kho Game</title>
      </Head>
      <div>
        <TopBanner />
        <TopGame topGameList={topGameList} />
        <GameListTab
          allGameList={allGameList}
          h5GameList={h5GameList}
          miniGameList={miniGameList}
          rolePlayingGameList={rolePlayingGameList}
        />
      </div>
    </>
  );
};

export default GameStoreScreen;

export const getStaticProps = async (ctx) => {
  const topGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      order: {
        average: "DESC",
      },
    }
  );

  const allGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      limit: 10,
      page: 1,
      filter: {},
    }
  );

  const h5GameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      limit: 10,
      page: 1,
      filter: {
        categories: "game_h5",
      },
    }
  );

  const miniGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      limit: 10,
      page: 1,
      filter: {
        categories: "mini_game",
      },
    }
  );

  const rolePlayingGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      limit: 10,
      page: 1,
      filter: {
        categories: "nhap_vai",
      },
    }
  );

  return {
    props: {
      topGameList: topGameList.data.data,
      allGameList: allGameList.data.data,
      h5GameList: h5GameList.data.data,
      miniGameList: miniGameList.data.data,
      rolePlayingGameList: rolePlayingGameList.data.data,
    },
  };
};
