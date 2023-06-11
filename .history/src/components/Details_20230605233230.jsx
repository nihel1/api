import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
const Details = () => {
  const [users, setUsers] = useState(null);
  //console.log(users);
  const { id } = useParams();
  console.log(id);
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return <div>Details</div>;
};

export default Details;
