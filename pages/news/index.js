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
    limit: 10,
    filter: {
      categories: "tat_ca",
    },
  });

  const hotNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    limit: 10,
    filter: {
      categories: "tin_nong",
    },
  });

  const newGameNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    limit: 10,
    filter: {
      categories: "game_moi",
    },
  });

  const eventNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    limit: 10,
    filter: {
      categories: "su_kien",
    },
  });

  const promoteNews = await axios.post(`${process.env.API_URL}/api/news/list`, {
    order: order,
    limit: 10,
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
      allNews: {
        list: allNews.data.data,
        total: allNews.data.data.meta.pagination.total,
      },
      hotNews: {
        list: hotNews.data.data,
        total: hotNews.data.data.meta.pagination.total,
      },
      newGameNews: {
        list: newGameNews.data.data,
        total: newGameNews.data.data.meta.pagination.total,
      },

      eventNews: {
        list: eventNews.data.data,
        total: eventNews.data.data.meta.pagination.total,
      },
      promoteNews: {
        list: promoteNews.data.data,
        total: promoteNews.data.data.meta.pagination.total,
      },

      mostViewNews: mostViewNews.data.data,
    },
  };
};
