import Image from "next/image";
import Banner from "public/assets/images/NewsScreen_Banner1.png";
import NewsTabs from "../NewsTabs";
import { StyledBannerWrapper } from "./styles";

export const TopBanner = () => {
  return (
    <StyledBannerWrapper>
      <Image src={Banner} alt="News Screen Banner" />

      <NewsTabs />
    </StyledBannerWrapper>
  );
};
