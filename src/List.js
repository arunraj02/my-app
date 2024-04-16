import React from "react";

function List(props) {
  const { users } = props;

  const userList = users.map((user, index) => (
    <li key={index}>
      <strong>Index:</strong> {index + 1} <br />
      <strong>Name:</strong> {user.userName} <br />
      <strong>Age:</strong> {user.age}
    </li>
  ));

  return (
    <div className="list-container">
      <h2>Welcome List</h2>
      <ul>{userList}</ul>
    </div>
  );
}

export default List;