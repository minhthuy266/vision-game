import GameList from "@/components/HomeScreenComponents/GameList";
import HomeNews from "@/components/HomeScreenComponents/HomeNews";
import MiniGame from "@/components/HomeScreenComponents/MiniGame";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import { withSessionSsr } from "lib/withSession";
import md5 from "md5";
import TopBanner from "../components/HomeScreenComponents/TopBanner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleUserInfo } from "feature/user/userSlice";
import { useEffect } from "react";
import { getAuthInfor } from "api/modules/auth";
import Cookies from "js-cookie";

export default function Home({ userInfo, isAuthed }) {
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
    <div>
      <TopBanner />
      <TopGame />
      <MiniGame />
      <GameList />
      <HomeNews />
    </div>
  );
}

export function getServerSideProps(context) {
  return withSessionSsr(async (context) => {
    const res = await fetch(`http://localhost:3000/api/auth/infor`, {
      headers: {
        cookie: context.req.headers.cookie,
      },
    });
    const data = await res.json();
    return {
      props: {
        userInfo: data.data || null,
      },
    };
  })(context);
}
