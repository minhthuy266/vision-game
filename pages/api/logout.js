import { withSessionRoute } from "lib/withSession";

export default withSessionRoute(async function routeLogout(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false });

});
