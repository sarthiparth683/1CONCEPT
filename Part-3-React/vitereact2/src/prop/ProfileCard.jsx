const ProfileCard = ({ name , age }) => {
  return (
    <>
      <h1 style={{ backgroundColor: "blue", textAlign: "center" }}>
        ProfileCard
      </h1>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
    </> 
  );
};

export default ProfileCard; 
    