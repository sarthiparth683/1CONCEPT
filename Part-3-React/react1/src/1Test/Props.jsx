import React from "react";

// export function UserProfile({ name, age, isOnline }) {
function UserProfile({ name, age, isOnline }) {
  return (
    <div className="card">
      <h1>Props</h1>
      <h2>{name}</h2>
      {age && <p>Age: {age}</p>}
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}

export default UserProfile;
