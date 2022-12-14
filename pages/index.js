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
    <>
      <Head>
        <title>Trang Chủ</title>
      </Head>
      <div>
        <TopBanner />
        <TopGame />
        <MiniGame />
        <GameList />
        <HomeNews />
      </div>
    </>
  );
}

// export function getServerSideProps(context) {
//   return withSessionSsr(async (context) => {
//     let query = {
//       device: {
//         name: "xxx",
//         platform: "xxx",
//         device_token: "xxx",
//       },
//     };

//     let token = "Bearer " + context.req.session.token?.refresh_token;

//     const res = await fetch(`https://api.visionid.vn/api/auth/relogin`, {
//       method: "POST",
//       // headers: {
//       //   cookie: context.req.headers.cookie,
//       // },

//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },

//       body: JSON.stringify(query),
//     });

//     const data = await res.json();
//     console.log("first", data, "=======", token);

//     if (data) {
//       context.req.session.token.access_token = data?.data?.access_token;
//       context.req.session.token.refresh_token = data?.data?.refresh_token;

//       // Cookies.set("accessToken", data.data.access_token);
//       // Cookies.set("refreshToken", data.data.refresh_token);

//       console.log("dddd", data);

//       await context.req.session.save();
//     }

//     // console.log("object", context.req.session.token);

//     return {
//       props: {
//         // userInfo: data.data || null,
//         // accessToken: data.data.access_token,
//       },
//     };
//   })(context);
// }
