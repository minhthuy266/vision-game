// import { withIronSessionApiRoute } from "iron-session/next";

import axios from "axios";
import md5 from "md5";

// export default withIronSessionApiRoute(
//   function userRoute(req, res) {
//     console.log("req", req);

//     res.send({ user: req.session.user });
//   },
//   {
//     cookieName: "myapp_cookiename",
//     password: "complex_password_at_least_32_characters_long",
//     // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
//     cookieOptions: {
//       secure: process.env.NODE_ENV === "production",
//     },
//   }
// );

/* eslint-disable import/no-anonymous-default-export */

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.accJWT;

  try {
    const axiosResponse = await axios.post(
      "https://api.visionid.vn/api/vision-service/get-auth-info",
      {
        vision_token: md5(`${jwt}md5-vision-network`),
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    res.status(200).json(axiosResponse.data);
  } catch (error) {

    return res.status(404).json(error);
  }
}

