import GameList from "@/components/HomeScreenComponents/GameList";
import HomeNews from "@/components/HomeScreenComponents/HomeNews";
import MiniGame from "@/components/HomeScreenComponents/MiniGame";
import TopGame from "@/components/HomeScreenComponents/TopGame";
import TopBanner from "../components/HomeScreenComponents/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <TopGame />
      <MiniGame />
      <GameList />
      <HomeNews />
    </div>
  );
}
