import { Menu } from "antd";
import { useState } from "react";
import UserHeader from "public/assets/icons/UserHeader";
import VisionLogo from "public/assets/icons/VisionLogo";
import { HeaderContainer } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
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
      label: <Link href="/auth/login">Đăng nhập</Link>,
      key: "/auth/login",
      icon: <UserHeader />,
    },
  ];

  const router = useRouter();

  const [current, setCurrent] = useState(router.pathname);
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
