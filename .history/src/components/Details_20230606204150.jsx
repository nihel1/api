import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
const Details = () => {
  const [user, setUser] = useState(null);
  //console.log(user);
  const { id } = useParams();
  //console.log(id);
  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUser(res.data.find((el) => el.id == id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Link to="/">
        <button>home</button>
        {user && (
          <>
            <h1>name :{user.name}</h1>
          </>
        )}
      </Link>
      Details
    </div>
  );
};

export default Details;
