import { getAuthInfor } from "api/modules/auth";
import { withSessionRoute } from "lib/withSession";
import md5 from "md5";

export default withSessionRoute(async (req, res) => {
  try {
    const { access_token, refresh_token } = req.session.token;

    const response = await getAuthInfor(access_token, {
      vision_token: md5(`${access_token}md5-vision-network`),
    });
    res.json(response);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
});
