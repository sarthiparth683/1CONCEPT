import React, { useContext } from "react";
import { UserContext } from "../Context/User";

const UserProfile = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: "John Doe", email: "john@example.com" })}>Login</button>
      )}
    </div>
  );
};

export default UserProfile;
 