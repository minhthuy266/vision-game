import GameDetail from "@/components/GameDetailScreenComponents/GameDetail";
import TopBanner from "@/components/GameDetailScreenComponents/TopBanner";
import axios from "axios";
import Head from "next/head";

const GameDetailScreen = ({ gameDetails }) => {
  return (
    <>
      <Head>
        <title>Vĩnh Hằng Kỷ Nguyên</title>
      </Head>
      <div>
        <TopBanner gameDetails={gameDetails} />
        <GameDetail gameDetails={gameDetails} />
      </div>
    </>
  );
};

export default GameDetailScreen;

export const getStaticPaths = async (ctx) => {
  const { data } = await axios.post(
    `${process.env.API_URL}/api/game/list-intro`
  );

  return {
    paths: data?.data?.intro
      ?.filter((el) => el !== null)
      .map((item) => ({
        params: { gameSlug: item._id },
      })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const gameSlug = ctx.params?.gameSlug;

  const { data } = await axios.post(`${process.env.API_URL}/api/game/details`, {
    id: gameSlug,
  });

  return {
    props: {
      gameDetails: data.data,
    },
  };
};
