import Image from "next/image";
import Banner from "public/assets/images/NewsScreen_Banner1.png";
import NewsTabs from "../NewsTabs";

export const TopBanner = () => {
  return (
    <div>
      <Image src={Banner} alt="News Screen Banner" />

      <NewsTabs />
    </div>
  );
};
