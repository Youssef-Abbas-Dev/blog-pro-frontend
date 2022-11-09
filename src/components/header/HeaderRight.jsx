import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <Link className="header-right-link" to="/login">
        <i className="bi bi-box-arrow-in-right"></i>
        <span>Login</span>
      </Link>
      <Link className="header-right-link" to="/register">
        <i className="bi bi-person-plus"></i>
        <span>Register</span>
      </Link>
    </div>
  );
};

export default HeaderRight;
