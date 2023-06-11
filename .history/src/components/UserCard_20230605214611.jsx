import React from "react";
const UserCard = (user) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Link to={`/info/${user.id}`}>
        <button>Info</button>
      </Link>
      <hr />
    </div>
  );
};

export default UserCard;
