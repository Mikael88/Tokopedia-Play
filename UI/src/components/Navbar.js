import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to={`/`} className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">TokopediaPlay</a>
    </Link>
  );
};

export default Navbar;
