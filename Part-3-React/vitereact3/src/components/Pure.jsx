import React from "react";
import { produce } from "immer";

const Pure = () => {

  let originalUser = {
    username: "Deepak",
    skills: {
      technical: {
        coding: ["JS", "HTML", "CSS", "React"],
      },
      soft: {
        communication: "Great",
      },
    },
  };
  // Using immer
  let newUser = produce(originalUser, (original) => {
    original.skills.soft.communication = "badd";
  });
  // let newUser = {
  //   ...originalUser,
  //   skills: { ...originalUser.skills, soft: { ...originalUser.skills.soft } },
  // };
  console.log("New User: ", newUser);
  console.log("Original User: ", originalUser);

  return <div>Pure</div>;
};
export default Pure;
