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
      <Image
        src={
          gameDetails?.cover_image === null
            ? "https://picsum.photos/seed/picsum/200/300"
            : gameDetails?.cover_image
        }
        alt="Banner"
        className="banner-img"
        width={100}
        height={100}
      />
      <StyledWrapper style={{ position: "relative" }}>
        <StyledGameIcon>
          <Image
            src={
              gameDetails?.application?.logo === null
                ? "https://picsum.photos/seed/picsum/200/300"
                : gameDetails.application.logo
            }
            width={160}
            height={160}
            alt="Game Icon"
          />

          <StyledGroupBtn>
            <a href={gameDetails.game_play} target="_blank" rel="noreferrer">
              <Button>Chơi ngay</Button>
            </a>

            <a href={gameDetails.top_up} target="_blank" rel="noreferrer">
              <Button>Nạp game</Button>
            </a>

            <a href={gameDetails.app_store} target="_blank" rel="noreferrer">
              <Image src={AppleStore} alt="Apple Store" />
            </a>

            <a href={gameDetails.google_play} target="_blank" rel="noreferrer">
              <Image src={GooglePlay} alt="Google Play" />
            </a>
          </StyledGroupBtn>
        </StyledGameIcon>
      </StyledWrapper>
    </StyledTopBannerContainer>
  );
};

export default TopBanner;
