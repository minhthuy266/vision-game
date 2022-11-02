import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { MainContainer } from "./styles";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isHasBanner, setIsHasBanner] = useState(false);
  const [isAuthScreen, setIsAuthScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.pathname === "/" ||
    router.pathname === "/auth/login" ||
    router.pathname === "/game-store"
      ? setIsHasBanner(true)
      : setIsHasBanner(false);

    router.pathname === "/auth/login" || router.pathname === "/auth/register"
      ? setIsAuthScreen(true)
      : setIsAuthScreen(false);
  }, [router.pathname]);

  return (
    <>
      <Header />
      <MainContainer isHasBanner={isHasBanner} isAuthScreen={isAuthScreen}>
        {children}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
