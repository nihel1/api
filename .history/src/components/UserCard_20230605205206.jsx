import React from "react";
const UserCard = (user) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <button>Info</button>
      <hr/>s
    </div>
  );
};

export default UserCard;
