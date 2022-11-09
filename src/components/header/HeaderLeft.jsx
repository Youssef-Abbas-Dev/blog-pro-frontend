import { Link } from "react-router-dom";

const HeaderLeft = ({ setToggle, toggle }) => {
  return (
    <div className="header-left">
      <Link to="/" className="header-logo">
        <strong>BLOG</strong> <i className="bi bi-pencil"></i>
      </Link>
      <div onClick={() => setToggle((prev) => !prev)} className="header-menu">
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
