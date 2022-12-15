import { TopBanner } from "@/components/NewsScreenComponents/TopBanner";
import Head from "next/head";
import React from "react";
import axios from "axios";
import NewsTabs from "@/components/NewsScreenComponents/NewsTabs/index";

const NewsScreen = ({
  allNews,
  hotNews,
  newGameNews,
  eventNews,
  promoteNews,
  mostViewNews,
}) => {
  return (
    <>
      <Head>
        <title>Tin Tức</title>
      </Head>
      <div>
        <TopBanner />
      </div>

      <NewsTabs
        allNews={allNews}
        hotNews={hotNews}
        newGameNews={newGameNews}
        eventNews={eventNews}
        promoteNews={promoteNews}
        mostViewNews={mostViewNews}
      />
    </>
  );
};

export default NewsScreen;

export const getStaticProps = async (ctx) => {
  const order = {
    createdAt: -1,
  };

  const allNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    filter: {
      categories: "tat_ca",
    },
  });

  const hotNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    filter: {
      categories: "tin_nong",
    },
  });

  const newGameNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    filter: {
      categories: "game_moi",
    },
  });

  const eventNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    filter: {
      categories: "su_kien",
    },
  });

  const promoteNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    filter: {
      categories: "uu_dai",
    },
  });

  const mostViewNews = await axios.post(
    `${process.env.API_URL}/api/news/list`,
    {
      order: {
        views: "DESC",
      },
    }
  );

  return {
    props: {
      allNews: allNews.data.data,
      hotNews: hotNews.data.data,
      newGameNews: newGameNews.data.data,
      eventNews: eventNews.data.data,
      promoteNews: promoteNews.data.data,
      mostViewNews: mostViewNews.data.data,
    },
  };
};
