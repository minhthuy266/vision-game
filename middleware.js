import { BLACK_LIST_ROUTE } from "constant/router";
import { NextResponse } from "next/server";

export function middleware(req, res) {
  let verify = req.cookies.get("isAuthed");

  let url = new URL(req.nextUrl);
  let pathname = url.pathname;

  const isAuthRoute = (pathname) => {
    return pathname.startsWith("/api/auth");
  };

  if (!verify && BLACK_LIST_ROUTE.includes(pathname && isAuthRoute(pathname))) {
    return NextResponse.redirect(
      "https://auth.visionid.vn/authorize/game-portal-sandbox"
    );
  }

  return NextResponse.next();
}
