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

export default function Home({ userInfo }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleUserInfo(userInfo));
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

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const { access_token, refresh_token } = req.session.token;

    const axiosInstance = axios.create({
      baseURL: "https://api.visionid.vn",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const { data } = await axiosInstance.post(
      "https://api.visionid.vn/api/vision-service/get-auth-info",
      {
        vision_token: md5(`${access_token}md5-vision-network`),
      }
    );

    return {
      props: {
        userInfo: data.data,
      },
    };
  }
);
