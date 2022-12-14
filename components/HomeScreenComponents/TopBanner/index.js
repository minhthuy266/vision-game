import axios from "axios";
import Image from "next/image";
import Banner1 from "public/assets/images/HomeScreen_Banner1.png";
import { StyledBtn, StyledBtnWrapper, TopBannerContainer } from "./styles";

const TopBanner = () => {
  // const handleClick = async () => {
  //   const res = await axios("/api/user");

  //   console.log("object", res);
  // };

  // const handleClick = async () => {
  //   try {
  //     const response = await axios.get("/api/user");
  //     console.log(response);
  //     if (response.status === 200) {
  //       console.log("object");
  //     }
  //   } catch (error) {
  //     console.log("first");
  //   }
  // };

  const handleClick = () => {
    axios
      .get("/api/user")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TopBannerContainer>
      <Image src={Banner1} alt="Home Screen Banner 1" />

      <StyledBtnWrapper>
        <StyledBtn onClick={handleClick}>NẠP NGAY</StyledBtn>
      </StyledBtnWrapper>
    </TopBannerContainer>
  );
};

export default TopBanner;
