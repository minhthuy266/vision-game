import { TopBanner } from "@/components/NewsScreenComponents/TopBanner";
import Head from "next/head";
import React from "react";

const NewsScreen = () => {
  return (
    <>
      <Head>
        <title>Tin Tức</title>
      </Head>
      <div>
        <TopBanner />
      </div>
    </>
  );
};

export default NewsScreen;
