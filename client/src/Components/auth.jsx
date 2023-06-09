import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthImg from '../Images/auth2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/Css/auth.css";
import * as api from "../api/index.js"

const initialState = {
  name: "",  
  email: "",
  password: "", 
  address: "",
  phone: ""
};

const Auth = () => {
  // state to check if the user wants to signin or signup
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // set the value of a particular input
    console.log(formData)
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const signin = (formData, navigate) => {
    try {      
      api.signIn(formData)
        .then((res) => {
          const response = res.data;
          localStorage.setItem("profile", JSON.stringify({ response }));
        });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = (formData, navigate) => {
    try {      
      api.signUp(formData)
        .then((res) => {
          const response = res.data;
          localStorage.setItem("profile", JSON.stringify({ response }));
        });
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };    

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {         
      signup(formData, navigate); // send input data in the database. navigate to navigate once something happens
    } else {
      signin(formData, navigate);
    }
  };


  return (
    <>
      <div className="login-page my-auto">
        <div className="container">
          <div className="row">
            {
              // to center the form used the foll line
            }
            <div className="col-lg-10 offset-lg-1 h-100 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-2 px-5">
                      <form action="" className="row g-2">
                        <h3 className="">{isSignup ? "Create Account!" : "Welcome back"}</h3>
                        {isSignup && (
                          <div className="col-12">
                            <label>
                              Username<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Enter Username"
                                name="name"
                              />
                            </div>
                          </div>
                        )}

                        <div className="col-12">
                          <label>
                            Email<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-envelope-fill"></i>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter Email"
                              name="email"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label>
                            Password<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter Password"
                              name="password"
                            />
                          </div>
                        </div>

                        {
                        isSignup && (
                        <div className="col-12">
                          <label>
                            address<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="test"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter Address"
                              name="address"
                            />
                          </div>
                        </div>       
                        )}

                      {
                      isSignup && (
                        <div className="col-12">
                          <label>
                            Phone<span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter Ph No"
                              name="phone"
                            />
                          </div>
                        </div> 
                        )}                 

                      <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary px-4 float-end"
                            onClick={handleSubmit}
                          >
                            {isSignup ? "Sign Up" : "Sign In"}
                          </button>
                        </div>

                        <hr className="my-4" />
                        <div className="text-center">
                          {isSignup
                            ? "Already Have an Account? "
                            : "Don't Have an Account? "}
                          <span
                            onClick={switchMode}
                            className="text-primary cursor-mode"
                          >
                            {isSignup ? "SIGN IN" : "SIGN UP"}
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0 d-none d-md-block">
                    <div className="form-right h-100 text-white text-center">
                    <img src={AuthImg} alt="" className="right-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
