// // import { withIronSessionApiRoute } from "iron-session/next";

// import axios from "axios";
// import md5 from "md5";

// // export default withIronSessionApiRoute(
// //   function userRoute(req, res) {
// //     console.log("req", req);

// //     res.send({ user: req.session.user });
// //   },
// //   {
// //     cookieName: "myapp_cookiename",
// //     password: "complex_password_at_least_32_characters_long",
// //     // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
// //     cookieOptions: {
// //       secure: process.env.NODE_ENV === "production",
// //     },
// //   }
// // );

// /* eslint-disable import/no-anonymous-default-export */
// export default async function (req, res) {
//   const { cookies } = req;

//   const jwt = cookies.accJWT;

//   // try {
//   //   const axiosResponse = await axios.post(
//   //     "https://api.visionid.vn/api/vision-service/get-auth-info",
//   //     {
//   //       vision_token: md5(`${jwt}md5-vision-network`),
//   //     },
//   //     {
//   //       headers: {
//   //         Authorization: `Bearer ${jwt}`,
//   //       },
//   //     }
//   //   );

//   //   console.log("object", res);

//   // try {
//   //   const axiosResponse = await axios(
//   //     "https://jsonplaceholder.typicode.com/todos/1"
//   //   );

//   //   console.log("object", axiosResponse);

//   //   return res.status(200).send(axiosResponse.data);
//   // } catch (error) {
//   //   return res.status(404).send("error");
//   // }

//   const url = `https://random-palette-generator.p.rapidapi.com/palette/`;

//   await axios
//     .get(url)
//     .then((response) => {
//       console.log(response);
//       res.status(200).json(response);
//     })
//     .catch(({ err }) => {
//       res.status(400).json({ err });
//     });

//   // const data = async () => {
//   //   const a = await axios
//   //     .post(
//   //       "https://api.visionid.vn/api/vision-service/get-auth-info",
//   //       {
//   //         vision_token: md5(`${jwt}md5-vision-network`),
//   //       },
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${jwt}`,
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     )
//   //     .then((res) => res.json({ message: "Invalid token!" }));
//   // };

//   // // console.log("req", req);

//   // data();

//   // if (!jwt) {
//   //   return res.json({ message: "Invalid token!" });
//   // }

//   // return res.json({ data: "Top secret data!" });
// }

import axios from "axios";
export default async function handler(req, res) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  res.status(200).json(response.data);
}
