import { Button } from "antd";
import Image from "next/image";
import AppleStore from "public/assets/images/GameDetailScreen_AppleStore.png";
import GooglePlay from "public/assets/images/GameDetailScreen_GooglePlay.png";
import GameImg from "public/assets/images/GameDetailScreen_VinhHangKyNguyenBanner.png";
import GameIcon from "public/assets/images/GameDetailScreen_VinhHangKyNguyenIcon.png";
import { StyledWrapper } from "styles/styles";
import {
  StyledGameIcon,
  StyledGroupBtn,
  StyledTopBannerContainer,
} from "./styles";

const TopBanner = ({ gameDetails }) => {
  return (
    <StyledTopBannerContainer>
      <Image src={GameImg} alt="Banner" className="banner-img" />
      <StyledWrapper style={{ position: "relative" }}>
        <StyledGameIcon>
          <Image
            src={
              gameDetails.application.logo === null
                ? "https://picsum.photos/seed/picsum/200/300"
                : gameDetails.application.logo
            }
            width={160}
            height={160}
            alt="Game Icon"
          />

          <StyledGroupBtn>
            <Button>Chơi ngay</Button>

            <Button>Nạp game</Button>

            <a href={gameDetails.app_store}>
              <Image src={AppleStore} alt="Apple Store" />
            </a>

            <a href={gameDetails.google_play}>
              <Image src={GooglePlay} alt="Google Play" />
            </a>
          </StyledGroupBtn>
        </StyledGameIcon>
      </StyledWrapper>
    </StyledTopBannerContainer>
  );
};

export default TopBanner;
