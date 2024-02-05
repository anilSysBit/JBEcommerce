import React from "react";

const Login = () => {
  return (
    <div className="login_main_container">
      <div className="login_size_manager">
        <div className="form_header">
            <h3>Welcome to Daraz! Please login.</h3>
            <p>New member ? <span>Register</span> here</p>
        </div>
        <form action="#">
          <div className="left">
            <div className="form_control">
              <label htmlFor="email">Phone Number of Email*</label>
              <input
                type="text"
                placeholder="Please enter your Phone number or Email"
              />
            </div>
            <div className="form_control">
              <label htmlFor="password">Password*</label>
              <input type="password" placeholder="Please enter your Password" />
            </div>
          </div>
          <div className="right">
            <button className="gb_login">Login</button>
            <br/> <br/>or, Login with <br/>
            <button className="fb_login">Facebook</button>
            <button className="google_login">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
