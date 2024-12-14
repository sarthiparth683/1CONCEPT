
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Nested Routing</h1>
      <ul>
        <li>
          <Link to="list">Service List</Link>
        </li>
        <li>
          <Link to="detail">Service Detail</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Services;
