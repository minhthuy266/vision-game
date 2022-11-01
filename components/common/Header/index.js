import { Button, Menu } from "antd";
import { useEffect, useState } from "react";
import UserHeader from "public/assets/icons/UserHeader";
import VisionLogo from "public/assets/icons/VisionLogo";
import { HeaderContainer, StyledLoginBtn } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const { data: session, status } = useSession();
  const { push, asPath, pathname } = useRouter();

  useEffect(() => {
    if (session) {
      setCurrent("0");
    }
  }, [session]);

  const handleSignIn = () => {
    setIsLoginScreen(true);

    pathname.includes("/auth/login")
      ? console.log("object")
      : push(`/auth/login?callbackUrl=${asPath}`);
  };

  useEffect(() => {
    pathname.includes("/auth/login")
      ? setIsLoginScreen(true)
      : setIsLoginScreen(false);
  }, [pathname]);

  const items = [
    {
      label: <Link href="/game-store">Kho Game</Link>,
      key: "/game-store",
    },
    {
      label: <Link href="/top-up-game">Nạp Game</Link>,
      key: "/top-up-game",
    },

    {
      label: <Link href="/subscription-fee">Gói Cước</Link>,
      key: "/subscription-fee",
    },
    {
      label: <Link href="/news">Tin Tức</Link>,
      key: "/news",
    },
    {
      label: <Link href="/policy">Điều Khoản</Link>,
      key: "/policy",
    },

    {
      label: <Link href="/contact">Liên hệ</Link>,
      key: "/contact",
    },

    {
      label: session ? (
        <div>
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={30}
            height={30}
            style={{ borderRadius: "50%" }}
          />{" "}
          &nbsp;
          {session.user.name}
        </div>
      ) : (
        <StyledLoginBtn isLoginScreen={isLoginScreen}>
          <Button onClick={handleSignIn}>
            <UserHeader /> &nbsp; Đăng nhập
          </Button>
        </StyledLoginBtn>
      ),
      danger: session ? false : true,
      key: session ? "/auth/login" : null,
      children: session
        ? [
            {
              label: "Hồ sơ cá nhân",
              key: "setting:1",
            },
            {
              label: "Cài đặt và bảo mật",
              key: "setting:2",
            },
            {
              label: <div onClick={signOut}>Đăng xuất</div>,
              key: "setting:3",
            },
          ]
        : [],
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <HeaderContainer>
      <Link href="/" onClick={() => setCurrent("0")}>
        <VisionLogo />
      </Link>

      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </HeaderContainer>
  );
};

export default Header;
