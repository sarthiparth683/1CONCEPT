const user = {
    id: 339,
    name: "John",
    age: 42,
    education: {
      degree: "Masters",
    },
  };
  const {
    name,
    education: { degree },
  } = user;
  