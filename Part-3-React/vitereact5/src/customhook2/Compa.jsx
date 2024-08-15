import { useLocalStorageState } from "./custom2";

export const ComponentA = () => {
  const [name, setName] = useLocalStorageState("name", "");
  const [location, setLocation] = useLocalStorageState("location", "");

  return (
    <div>
      <h2>Component A</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <div> 
        <h2>Component B</h2>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
      </div>
    </div>
  );
};
