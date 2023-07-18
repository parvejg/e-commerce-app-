import { Link } from "react-router-dom";
import "./ModalPage.css";
export const SignUp = () => {
  return (
    <div className="signPage">
      <div className="signup-wrapper">
        <h2>SignUp</h2>
        <div className="signup-inputs-wrapper">
          <div>
            <label for="name-input" className="inputs-label">
              Name
            </label>
            <input type="text" id="name-input" placeholder="Enter your Name" />
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

            <a href="/" className="forget-password-link">
              Forget Password
            </a>
          </div>
          <div className="signup-btn-wrapper">
            <button className="signup-btn">SignUp</button>
            <Link className="signup-btn" to="/signIn">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SignIn = () => {
  return (
    <div className="signPage">
      <div className="signup-wrapper">
        <h2>Sign In</h2>
        <div className="signup-inputs-wrapper">
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
          <div className="signup-btn-wrapper">
            <button className="signup-btn">SignUp</button>
            <button className="signup-btn">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};
