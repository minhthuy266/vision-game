import GameDetail from "@/components/GameDetailScreenComponents/GameDetail";
import TopBanner from "@/components/GameDetailScreenComponents/TopBanner";
import Head from "next/head";

const GameDetailScreen = () => {
  return (
    <>
      <Head>
        <title>Vĩnh Hằng Kỷ Nguyên</title>
      </Head>
      <div>
        <TopBanner />
        <GameDetail />
      </div>
    </>
  );
};

export default GameDetailScreen;
