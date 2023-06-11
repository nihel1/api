import React from "react";
import UserCard from "./UserCard";
const UserList = ({ users }) => {
  return (
    <div>
      {users &&
        React.Children.toArray(users.map((el) => <UserCard user={el} />))}
    </div>
  );
};

export default UserList;
