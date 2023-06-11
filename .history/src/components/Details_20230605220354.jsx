import React, { useState } from "react";
const Details = () => {
    const [users, setUsers]=useState(null)
    const getUsers= async()=>{
        try {
            const res=await axios.get("https://jsonplaceholder.typicode.com/users")s
        } catch(error){

        }
    }
  return <div>Details</div>;
};

export default Details;
