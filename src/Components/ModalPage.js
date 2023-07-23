import { Link } from "react-router-dom";
import "./ModalPage.css";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { postCall } from "./reusableFunction";
export const SignUp = () => {
  const SignUpAPI = "/api/auth/signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const signUpHandler = () => {
    return requestBody;
  };
  const requestBody = {
    email: email,
    password: password,
    name: name,
  };
  useEffect(() => {
    (async () => {
      const response = await postCall(SignUpAPI, requestBody);
      console.log(response);
    })();
  }, []);

  return (
    <Layout>
      <div className="loginPage">
        <div className="login-wrapper">
          <h2>Signup</h2>
          <div className="login-inputs-wrapper">
            <div>
              <label for="name-input" className="inputs-label">
                Name
              </label>
              <input
                type="text"
                id="name-input"
                placeholder="Enter your Name"
                onChange={(e)=>setname(e.target.value)}
              />
            </div>
            <div>
              <label for="email-input" className="inputs-label">
                Email
              </label>
              <input
                type="text"
                id="email-input"
                placeholder="Enter your Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password-input" className="inputs-label-password">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                placeholder="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="login-btn-wrapper">
              <button className="createAccount-btn" onClick={signUpHandler}>Create New Account</button>
            </div>

            <Link className="already-account-link">Already have a Account</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Login = () => {
  const logingAPI = "/api/auth/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    return requestBody;
  };
  const requestBody = {
    email: email,
    password: password,
  };
  useEffect(() => {
    (async () => {
      const response = await postCall(logingAPI, requestBody);
      console.log(response);
    })();
  }, []);
  return (
    <Layout>
      <div className="loginPage">
        <div className="login-wrapper">
          <h2>Login</h2>
          <div className="login-inputs-wrapper">
            <div>
              <label for="email-input" className="inputs-label">
                Email
              </label>
              <input
                type="text"
                id="email-input"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password-input" className="inputs-label-password">
                Password
              </label>
              <input
                type="password"
                id="password-input"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="/" className="forget-password-link">
                Forget Password
              </a>
            </div>
            <div className="login-btn-wrapper">
              <button className="login-btn" onClick={loginHandler}>
                Login
              </button>
            </div>

            <Link className="createNewAccount-link" to="/createNewAccount-page">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
