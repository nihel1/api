import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/dist";
import Spinner from "./Spinner";
import axios from "axios";
const Details = () => {
  const [user, setUser] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  //console.log(user);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setIsLoding(false);
        setUser(res.data.find((el) => el.id === id));
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [setUser]);

  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      {isLoding ? (
        <div>
          <Spinner />
          <h1>Loading...</h1>
        </div>
      ) : (
        user && (
          <>
            <h1>name :{user.name}</h1>
          </>
        )
      )}
      Details
    </div>
  );
};

export default Details;
