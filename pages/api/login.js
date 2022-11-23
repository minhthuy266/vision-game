import { withSessionRoute } from "lib/withSession";

export default withSessionRoute(async function routeLogin(req, res) {
  console.log("object", req);

  req.session.token = {
    access_token: req.query.access_token,
    refresh_token: req.query.refresh_token,
  };
  await req.session.save();
  res.redirect(`${process.env.APP_URL}`);
});
