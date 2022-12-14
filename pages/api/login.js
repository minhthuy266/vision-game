import { serialize } from "cookie";
import { withSessionRoute } from "lib/withSession";

export default withSessionRoute(async function routeLogin(req, res) {
  req.session.token = {
    access_token: req.query.access_token,
    refresh_token: req.query.refresh_token,
  };

  const serialised = serialize("accJWT", req.session.token.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialised);

  await req.session.save();

  res.redirect(`${process.env.APP_URL}`);
});
