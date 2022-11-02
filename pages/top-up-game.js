import GameCharacterInfo from "@/components/TopUpGameScreenComponents/GameCharacterInfo";
import PaymentMethod from "@/components/TopUpGameScreenComponents/PaymentMethod";
import PopularGame from "@/components/TopUpGameScreenComponents/PopularGame";
import TopUpPackage from "@/components/TopUpGameScreenComponents/TopUpPackage";
import React from "react";

const TopUpGameScreen = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <PopularGame />
      <GameCharacterInfo />
      <TopUpPackage />
      <PaymentMethod />
    </div>
  );
};

export default TopUpGameScreen;
