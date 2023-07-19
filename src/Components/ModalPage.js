import { Link } from "react-router-dom";
import "./ModalPage.css";
import { Layout } from "./Layout";
export const SignUp = () => {
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
              />
            </div>
            <div className="login-btn-wrapper">
              <button className="createAccount-btn">Create New Account</button>
            </div>

            <Link className="already-account-link">Already have a Account</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Login = () => {
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
              />

              <a href="/" className="forget-password-link">
                Forget Password
              </a>
            </div>
            <div className="login-btn-wrapper">
              <button className="login-btn">Login</button>
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
