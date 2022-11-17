import GameList from "@/components/HomeScreenComponents/GameList";
import HomeNews from "@/components/HomeScreenComponents/HomeNews";
import MiniGame from "@/components/HomeScreenComponents/MiniGame";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import { handleUserInfo } from "feature/user/userSlice";
import Cookies from "js-cookie";
import { withSessionSsr } from "lib/withSession";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopBanner from "../components/HomeScreenComponents/TopBanner";

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
