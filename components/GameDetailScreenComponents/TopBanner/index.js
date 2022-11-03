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

const TopBanner = () => {
  return (
    <StyledTopBannerContainer>
      <Image src={GameImg} alt="Banner" className="banner-img" />
      <StyledWrapper style={{ position: "relative" }}>
        <StyledGameIcon>
          <Image src={GameIcon} alt="Game Icon" />

          <StyledGroupBtn>
            <Button>Chơi ngay</Button>

            <Button>Nạp game</Button>

            <Image src={AppleStore} alt="Apple Store" />

            <Image src={GooglePlay} alt="Google Play" />
          </StyledGroupBtn>
        </StyledGameIcon>
      </StyledWrapper>
    </StyledTopBannerContainer>
  );
};

export default TopBanner;
