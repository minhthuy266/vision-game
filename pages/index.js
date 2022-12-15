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

export default function Home({ userInfo, isAuthed, homeNewsList }) {
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
        <TopGame />
        <MiniGame />
        <GameList />
        <HomeNews homeNewsList={homeNewsList} />
      </div>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { data } = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: {
      createdAt: -1,
    },
    limit: 9,
    page: 1,
  }); // your fetch function here

  return {
    props: {
      homeNewsList: data.data,
    },
  };
};
