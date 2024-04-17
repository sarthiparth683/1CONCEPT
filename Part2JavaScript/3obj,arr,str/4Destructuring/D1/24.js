const user = {
    id: 339,
    name: "John",
    age: 42,
    education: {
      degree: {
        name: "BCA",
      },
    },
  };
  const {
    name: fname,
    education: {
      degree: { name: degreeName },
    },
  } = user;
  