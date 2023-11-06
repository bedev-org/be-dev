import React from "react";
import axios from "axios";

const DeleteUser = (id, token) => {
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  axios.delete(`/api/users/${id}`, headers).then(() => {
    console.log("success");
  });
};

export default DeleteUser;
