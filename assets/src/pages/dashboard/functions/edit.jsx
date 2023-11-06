import React from "react";
import axios from "axios";

const EditUser = (
  id,
  token,
  lastName,
  firstName,
  email,
  address,
  phone,
  password,
  currentServices
) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
      "Content-type": "application/ld+json",
    },
  };

  const editUser = {
    email: email,
    adress: address,
    phone: phone,
    password: password,
    lastName: lastName,
    firstName: firstName,
    currentServices: currentServices,
  };

  axios.put(`/api/users/${id}`, editUser, config).then((response) => {
    console.log(response);
  });
};

export default EditUser;
