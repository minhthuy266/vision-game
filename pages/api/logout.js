import { serialize } from "cookie";
import { withSessionRoute } from "lib/withSession";
import axios from "axios";

export default withSessionRoute(async function routeLogout(req, res) {
  await axios("https://auth.visionid.vn/logout/game-portal-sandbox");

  const { cookies } = req;

  const jwt = cookies.accJWT;

  if (!jwt) {
    return res.json({ message: "Bro you are already not logged in..." });
  } else {
    const serialised = serialize("accJWT", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    req.session.destroy();

    res.status(200).json({ message: "Successfuly logged out!" });
    res.redirect(`${process.env.APP_URL}`);
  }
});
