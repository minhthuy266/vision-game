import GameList from "@/components/HomeScreenComponents/GameList";
import HomeNews from "@/components/HomeScreenComponents/HomeNews";
import MiniGame from "@/components/HomeScreenComponents/MiniGame";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import { handleUserInfo } from "feature/user/userSlice";
import Cookies from "js-cookie";
import { withSessionSsr } from "lib/withSession";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from "../components/HomeScreenComponents/TopBanner";
import axios from "axios";

export default function Home({
  userInfo,
  isAuthed,
  homeNewsList,
  topGameList,
  miniGameList,
  allGameList,
}) {
  const dispatch = useDispatch();

  async function getUserInfor() {
    if (userInfo) {
      dispatch(handleUserInfo(userInfo));
      Cookies.set("isLogin", true);
    }
  }

  useEffect(() => {
    getUserInfor();
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>Trang Chủ</title>
      </Head>
      <div>
        <TopBanner />
        <TopGame topGameList={topGameList} />
        <MiniGame miniGameList={miniGameList} />
        <GameList allGameList={allGameList} />
        <HomeNews homeNewsList={homeNewsList} />
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const homeNewsList = await axios.post(
    `${process.env.API_URL}/api/news/list`,
    {
      order: {
        createdAt: -1,
      },
      limit: 9,
      page: 1,
    }
  );

  const topGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      order: {
        average: "DESC",
      },
    }
  );

  const miniGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      filter: {
        categories: "mini_game",
      },

      limit: 6,
      page: 1,
    }
  );

  const allGameList = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`,
    {
      filter: {},
      limit: 18,
      page: 1,
    }
  );

  return {
    props: {
      homeNewsList: homeNewsList.data.data,
      topGameList: topGameList.data.data,
      miniGameList: miniGameList.data.data,
      allGameList: allGameList.data.data,
    },
  };
};
