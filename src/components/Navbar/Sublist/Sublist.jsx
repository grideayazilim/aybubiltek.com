import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Sublist = forwardRef(({ items, onItemClick }, ref) => {
  return (
    <ul
      ref={ref}
      className="sublist blur-container anti-blur blur-div"
      style={{
        height: "0px",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      {items.map(({ to, label }) => (
        <li className="sublist-item" key={to}>
          <Link to={to} className="nav-link" onClick={onItemClick}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default Sublist;
