import "antd/dist/antd.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Layout from "../components/layouts";
import "../styles/globals.css";
import "../styles/responsive.css";
import { store } from "redux/store";

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
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
