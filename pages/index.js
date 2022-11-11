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

export default function Home({ userInfo, isAuthed }) {
  const dispatch = useDispatch();

  // console.log(userInfo);

  // useEffect(() => {
  //   dispatch(handleUserInfo(userInfo));
  //   localStorage.setItem("isAuthed", isAuthed);
  // }, []);

  async function getUserInfor() {
    const res = await fetch(`/api/auth/infor`);
    const data = await res.json();
    dispatch(handleUserInfo(data.data));
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
