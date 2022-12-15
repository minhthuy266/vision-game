import NewsDetail from "@/components/NewsDetailScreenComponents/NewsDetail";
import Head from "next/head";
import { StyledWrapper } from "styles/styles";
import axios from "axios";

const NewsDetailScreenComponent = ({ newsDetails }) => {
  return (
    <>
      <Head>
        <title>Tin Tức</title>
      </Head>
      <StyledWrapper>
        <NewsDetail newsDetails={newsDetails} />
      </StyledWrapper>
    </>
  );
};

export default NewsDetailScreenComponent;

export const getStaticPaths = async (ctx) => {
  const { data } = await axios.post(`${process.env.API_URL}/api/news/list`, {});

  return {
    paths: data?.data?.news_details?.map((post) => ({
      params: { newsSlug: post._id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const newsSlug = ctx.params?.newsSlug;

  const { data } = await axios.post(`${process.env.API_URL}/api/news/details`, {
    id: newsSlug,
  });

  console.log("a", data);

  return {
    props: {
      newsDetails: data.data,
    },
  };
};
