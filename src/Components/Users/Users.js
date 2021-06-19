import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";

const Users = () => {
  const [listUsers, setListUsers] = useState([]);

  const [error, setError] = useState(null);

  const Users = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListUsers(res.data))
      .catch((err) => setError(err));
  };
  console.log(error)

  useEffect(() => {
    Users();
  }, []);

  return (
    <div className="container">
      {listUsers.map((user, id) => (
        <UserCard user={user} key={id} />
      ))}
    </div>
  );
};

export default Users;
