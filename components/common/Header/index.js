import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import UserHeader from "public/assets/icons/UserHeader";
import VisionLogo from "public/assets/icons/VisionLogo";
import { useEffect, useState } from "react";
import {
  HeaderContainer,
  StyledLoginBtn,
  StyledMenuDesktop,
  StyledMenuTabletMobile,
} from "./styles";

const Header = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const [active, setActive] = useState("5");
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const { data: session, status } = useSession();
  const { push, asPath, pathname } = useRouter();

  const handleSignIn = () => {
    setIsLoginScreen(true);
    setCurrent(null);

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

  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <Link href="/" onClick={() => setCurrent("0")}>
        <VisionLogo />
      </Link>

      <StyledMenuTabletMobile>
        <Button type="primary" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: "26px" }} />
        </Button>

        <Drawer
          placement="right"
          onClose={onClose}
          open={open}
          width={320}
          className="tablet-mobile-drawer"
        >
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="vertical"
            items={items}
          />
        </Drawer>
      </StyledMenuTabletMobile>

      <StyledMenuDesktop>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </StyledMenuDesktop>
    </HeaderContainer>
  );
};

export default Header;
