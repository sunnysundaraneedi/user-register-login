import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginActions } from "../../store/loginSlice";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginActions.logUserIn({ loginEmail, loginPassword }));
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="forms">
        <div className="form login">
          <span className="title">Login</span>
          <form onSubmit={submitHandler}>
            {/*Inputs*/}
            <div className="input-field">
              <input
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <i className="uil uil-padlock icon"></i>
            </div>
            <button className="button">Login</button>
          </form>
          <div className="login-signup">
            <span className="text">Not a member?</span>
            <Link to="/register">
              <span className="text signup-text">Signup Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
