import { SessionProvider } from "next-auth/react";
import Layout from "../components/layouts";
import "antd/dist/antd.css";
import "../styles/globals.css";
import "../styles/responsive.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
