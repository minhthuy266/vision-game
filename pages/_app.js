import "antd/dist/antd.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Layout from "../components/layouts";
import "../styles/globals.css";
import "../styles/responsive.css";

function MyApp({ Component, pageProps, session }) {
  const [showChild, setShowChild] = useState(false);
  const { push, pathname } = useRouter();

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    if (pathname.includes("/api")) {
      push("/");
    }
  }, [pathname, push]);

  if (!showChild) {
    return null;
  }

  return (
    // <SessionProvider session={session}>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    // </SessionProvider>
  );
}

// export function getInitialProps(context) {
//   return withSessionSsr(async (context) => {
//     const res = await fetch(`http://localhost:3000/api/auth/infor`, {
//       headers: {
//         cookie: context.req.headers.cookie,
//       },
//     });
//     const data = await res.json();

//     console.log("dyaaaaa", data);
//     return {
//       props: {
//         userInfo: data.data || null,
//       },
//     };
//   })(context);
// }

// MyApp.getInitialProps = async (ctx) => {
//   const res = await fetch(`http://localhost:3000/api/auth/infor`, {
//     headers: {
//       cookie: context.req.headers.cookie,
//     },
//   });
//   const data = await res.json();

//   console.log("data", data);

//   return {
//     props: {
//       userInfo: data.data || null,
//     },
//   };
// };

export default MyApp;
