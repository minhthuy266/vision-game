import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { MainContainer } from "./styles";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [isHomeScreen, setIsHomeScreen] = useState(false);
  const [isAuthScreen, setIsAuthScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.pathname === "/" || router.pathname === "/auth/login"
      ? setIsHomeScreen(true)
      : setIsHomeScreen(false);

    router.pathname === "/auth/login" || router.pathname === "/auth/register"
      ? setIsAuthScreen(true)
      : setIsAuthScreen(false);
  }, [router.pathname]);

  return (
    <>
      <Header />
      <MainContainer isHomeScreen={isHomeScreen} isAuthScreen={isAuthScreen}>
        {children}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
