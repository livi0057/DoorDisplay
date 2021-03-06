import { NavLink } from "react-router-dom";

const SignUpView = ({
  handleSubmit,
  handleChange,
  signUpError,
  }) => {
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <p className="red-text text-darken-2">
          Please do not use your real email address or password.
        </p>

        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <input
            placeholder="First name"
            type="text"
            id="firstName"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Last name"
            type="text"
            id="lastName"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <p className="grey-text text-darken-2">All fields are required.</p>

        <div className="input-field">
          <button className="btn">Sign up</button>
          <div className="red-text center">
            {signUpError ? <p>{signUpError}</p> : null}
          </div>
        </div>
        <div className="center">Already have an account? <NavLink to="/" className="green-text text-darken-2" id= "signuptext">Sign in</NavLink></div>
      </form>
    </div>
  );
};

export default SignUpView;