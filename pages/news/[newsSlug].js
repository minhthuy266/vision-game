import NewsDetail from "@/components/NewsDetailScreenComponents/NewsDetail";
import Head from "next/head";
import { StyledWrapper } from "styles/styles";

const NewsDetailScreenComponent = () => {
  return (
    <>
      <Head>
        <title>Tin Tức</title>
      </Head>
      <StyledWrapper>
        <NewsDetail />
      </StyledWrapper>
    </>
  );
};

export default NewsDetailScreenComponent;
