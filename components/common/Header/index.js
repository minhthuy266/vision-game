import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import UserHeader from "public/assets/icons/UserHeader";
import VisionLogo from "public/assets/icons/VisionLogo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

  const { pathname } = useRouter();

  const { userInfo } = useSelector((state) => state.user);

  async function handleLogout() {
    await axios.get("/api/logout");
  }

  useEffect(() => {
    pathname.includes("/auth/login")
      ? setIsLoginScreen(true)
      : setIsLoginScreen(false);
  }, [pathname]);

  // const isAuthedStorage = JSON.parse(localStorage.getItem("isAuthed"));

  const items = [
    {
      label: <Link href="/game-store">Kho Game</Link>,
      key: "/game-store",
    },
    {
      label: <Link href="/top-up-game">Nạp Game</Link>,
      key: "/top-up-game",
    },

    // {
    //   label: <Link href="/subscription-fee">Gói Cước</Link>,
    //   key: "/subscription-fee",
    // },
    {
      label: <Link href="/news">Tin Tức</Link>,
      key: "/news",
    },
    {
      label: <Link href="/policy">Điều Khoản</Link>,
      key: "/policy",
    },

    // {
    //   label: <Link href="/contact">Liên hệ</Link>,
    //   key: "/contact",
    // },

    // {
    //   label: (
    //     <StyledLoginBtn isLoginScreen={isLoginScreen}>
    //       {/* <a href="https://auth.visionid.vn/authorize/game-portal-sandbox"> */}
    //       <UserHeader /> &nbsp; Đăng nhập
    //       {/* </a> */}
    //     </StyledLoginBtn>
    //   ),
    // },

    // {
    //   label: userInfo ? (
    //     <div>
    //       <Image
    //         src={userInfo.profilePhoto}
    //         alt="User Avatar"
    //         width={30}
    //         height={30}
    //         style={{ borderRadius: "50%" }}
    //       />{" "}
    //       &nbsp;
    //       {userInfo.fullName}
    //     </div>
    //   ) : (
    //     <StyledLoginBtn isLoginScreen={isLoginScreen}>
    //       <a href="https://auth.visionid.vn/authorize/game-portal-sandbox">
    //         <UserHeader /> &nbsp; Đăng nhập
    //       </a>
    //     </StyledLoginBtn>
    //   ),
    //   danger: userInfo ? false : true,
    //   key: userInfo ? "/auth/login" : null,
    //   children: userInfo
    //     ? [
    //         {
    //           label: <Link href="/profile">Hồ sơ cá nhân</Link>,
    //           key: "setting:1",
    //         },
    //         {
    //           label: <Link href="/settings">Cài đặt và bảo mật</Link>,
    //           key: "setting:2",
    //         },
    //         {
    //           label: (
    //             <a
    //               onClick={handleLogout}
    //               href="https://auth.visionid.vn/logout/game-portal-sandbox"
    //             >
    //               Đăng xuất
    //             </a>
    //           ),
    //           key: "setting:3",
    //         },
    //       ]
    //     : [],
    // },
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
