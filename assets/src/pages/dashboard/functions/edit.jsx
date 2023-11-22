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
  currentServices,
  company,
  roles
) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
      "Content-type": "application/merge-patch+json",
    },
  };

  const editUser = {
    email: email,
    address: address,
    phone: phone,
    password: password,
    lastName: lastName,
    firstName: firstName,
    currentServices: currentServices,
    company: company,
    roles: roles,
  };

  axios.patch(`/api/users/${id}`, editUser, config).then((response) => {
    alert("success");
  });
};

export default EditUser;
