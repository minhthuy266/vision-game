import Link from "next/link";
import ExpandRight from "public/assets/icons/ExpandRight";
import TopGameIcon from "public/assets/icons/TopGameIcon";
import React from "react";
import { StyledHeader } from "./styles";

const HeaderSection = ({ title, href, hasViewAllBtn }) => {
  return (
    <StyledHeader>
      <div>
        <TopGameIcon /> &nbsp; {title}
      </div>

      <div>
        <Link href={href}>
          Xem tất cả &nbsp;
          <ExpandRight />{" "}
        </Link>
      </div>
    </StyledHeader>
  );
};

export default HeaderSection;
