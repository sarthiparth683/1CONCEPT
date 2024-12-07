import { useToggle } from "./custom1";

export const ToggleComponent = () => {
  const [vegetarian, toggleVegetarian] = useToggle(false);
  const [engineer, toggleEngineer] = useToggle(false);
  const [lovesCoding, toggleLovesCoding] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVegetarian}>
        Vegetarian: {vegetarian ? "Yes" : "No"}
      </button>
      <button onClick={toggleEngineer}>
        Engineer: {engineer ? "Yes" : "No"}
      </button>
      <button onClick={toggleLovesCoding}>
        Loves Coding: {lovesCoding ? "Yes" : "No"}
      </button>
    </div>
  );   
};
