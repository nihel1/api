import React, { useState } from "react";
const Details = () => {
  const [users, setUsers] = useState(null);
  console.log(users);
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  getUsers();
  return <div>Details</div>;
};

export default Details;
