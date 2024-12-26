// export const increment = () => {
//   return { type: "INCREMENT" };
// };

// export const decrement = () => {
//   return { type: "DECREMENT" };
// };


export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action Creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});