// import React, { useEffect } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import process from "process";

// export const SetToken = () => {
//   const [cookie, setCookie] = useCookies(["name"]);

//   const data = {
//     username: "user@be-dev.org",
//     password: "user@be-dev.org",
//   };

//   const headers = {
//     "Content-Type": "application/ld+json",
//   };

//   axios
//     .post(`/api/login_check`, data, { headers: headers })
//     .then((response) => {
//       setCookie(`access_token`, response.data.token);
//     });
// };
