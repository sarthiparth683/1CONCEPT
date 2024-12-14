import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./cartSlice";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
  ];

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Shopping Cart</h1>
      <h2>Products</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            {product.name} - ${product.price.toFixed(2)} <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ margin: "10px 0" }}>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity} <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${getTotalPrice()}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default App;
