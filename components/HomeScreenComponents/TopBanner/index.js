import Image from "next/image";
import Banner1 from "public/assets/images/HomeScreen_Banner1.png";
import { TopBannerContainer } from "./styles";

const TopBanner = () => {
  return (
    <TopBannerContainer>
      <Image src={Banner1} alt="Home Screen Banner 1" />
    </TopBannerContainer>
  );
};

export default TopBanner;
