import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import {
  ShowErrorMsg,
  ShowSuccessMsg,
} from "../helpers/message";
import { ShowLoading } from "../helpers/loading";
import camping from "../images/camping.jpg";
import { signup } from "../api/auth";
import "./Signup.css";
const Signup = () => {

  const [formData, setFormData] = useState({
      username: 'ikram',
      email: 'ib@gmail.com',
      password: 'abc987',
      password2: 'abc987',
      successMsg: false,
      errorMsg: false,
      loading: false,
  });
  const {
      username,
      email,
      password,
      password2,
      successMsg,
      errorMsg,
      loading,
  } = formData;
 
  //  * EVENT HANDLERS
  
  const handleChange = (e) => {
     
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          successMsg: '',
          errorMsg: '',
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // client-side validation
       if (!isEmail(email)) {
          setFormData({
              ...formData,
              errorMsg: 'Invalid email',
          });
      } else if (!equals(password, password2)) {
          setFormData({
              ...formData,
              errorMsg: 'Passwords do not match',
          });
      } else {
          const { username, email, password } = formData;
          const data = { username, email, password };

          setFormData({ ...formData, loading: true });

          signup(data)
          .then((response) => {
              
              setFormData({
                  username: '',
                  email: '',
                  password: '',
                  password2: '',
                  loading: false,
                  // successMsg: 'response.data.successMessage',
              });
          })
          .catch((err) => {
              console.log('Axios signup error: ', err);
              setFormData({
                  ...formData,
                  loading: false,
                  // errorMsg: err.response.data.errorMessage,
              });
          });
      }
  };

  //view below
  const ShowSignupForm = () => (
    <div>
      <div className="text-center">
        <img
          src={camping}
          className="campingImg"
          alt="signup"
        />
        <h5 className=" mt-5 text-center text-gray">
          <em>
            {" "}
            Welcome, Nature is calling
            you!
          </em>
        </h5>

        <i className="fa fa-gold fa-lg "></i>
      </div>
      <form
        className="mt-5 "
        onSubmit={handleSubmit}
      noValidate>
        <div className="form-group input-group position-relative">
          <input
            className="form-control input-lg rounded-0"
            name="userName"
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="User Name"
          />
          <i className="fa fa-user fa-lg position-absolute"></i>
        </div>
        <div className="form-group input-group position-relative">
          <input
            className="form-control input-lg rounded-0"
            name="email"
            value={email}
            onChange={handleChange}
            type="text"
            placeholder="Email address"
          />
          <i className="fa fa-envelope fa-lg position-absolute"></i>
        </div>
        <div className="form-group input-group position-relative">
          <input
            className="form-control input-lg rounded-0"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Create Password"
          />
          <i className="fa fa-lock fa-lg position-absolute"></i>
        </div>
        <div className="form-group input-group position-relative">
          <input
            className="form-control input-lg rounded-0"
            name="password2"
            value={password2}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          <i className="fa fa-lock fa-lg position-absolute"></i>
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            onChange={handleChange}
            type="submit"
          >
            Sign up
          </button>
        </div>
        <p className="alert alert-light small text-center ">
          Already have an account?{" "}
          <Link to="/signin">
            {" "}
            Signin here
          </Link>
        </p>
      </form>
    </div>
  );
  return (
    <div className="container min-container py-md-5 mt-4">
      <div className="card-panel p-sm-5 position-relative">
        {errorMsg &&
          ShowErrorMsg(errorMsg)}
        {successMsg &&
          ShowSuccessMsg(successMsg)}
        <div className="text-center pb-5">
          {loading && ShowLoading()}
        </div>
        {ShowSignupForm()}
      </div>
    </div>
  );
};

export default Signup;
