import "./form.css";
import { toast } from "react-toastify";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") return toast.error("Password is required");

    console.log({ password });
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Reset Password</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Enter your new password"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ResetPassword;
