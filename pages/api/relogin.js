import axios from "axios";
import { withSessionRoute } from "lib/withSession";

export default withSessionRoute(async function routeLogout(req, res) {
  let query = {
    device: {
      name: "xxx",
      platform: "xxx",
      device_token: "xxx",
    },
  };
  let token = "Bearer " + req.session.token.refresh_token;
  const response = await axios({
    method: "post",
    url: "https://api.visionid.vn/api/auth/relogin",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: query,
  });

  console.log("==================", response);
  req.session.token = {
    accessToken: `${response?.data?.data?.access_token}md5-vision-network`,
    refreshToken: response?.data?.data?.refresh_token,
  };

  res.status(200).json({ res: response.data });
});
