import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars"></span>
            <h2 className="user">{user.name}</h2>
            <p className="user">{user.email}</p>
            <p className="user">{user.phone}</p>
            <p className="user">
              {user.address.street} {user.address.city}
            </p>
            <p className="user">
              {user.company.name} {user.company.catchPhrase}
            </p>
          </div>
        </div>
        <div className="face face2">
          <h2>User Info</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
