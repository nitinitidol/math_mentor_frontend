import React, { useState } from "react";
import "../Login/Login.scss";
import Banner1 from "../../assets/images/banner/auth-banner.svg";
import Auth_Logo from "../../assets/images/logo/logo.svg";
import Eye from "../../assets/images/vactor/eye.svg";
import EyeLine from "../../assets/images/vactor/eye-line.svg";
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import {
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="auth-wrapper">
        <div className="row mx-0 h-100">
          <div className="col-md-6 p-0">
            <div className="auth-banner-block">
              <div className="auth-banner-content">
              <div className="auth-banner-img">
                <img src={Banner1} alt="Banner1" />
                </div>
                <h4 className="banner-content-title">Master with AI</h4>
                <p className="banner-content-dsc-text">
                  Join thousands of students who are transforming their learning
                  journey with personalized AI assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="auth-form-block">
              <div className="auth-form-content-block">
                <div className="auth-logo">
                  <img src={Auth_Logo} alt="" />
                </div>
                <p className="content-dsc-text">
                Welcome Back!
                </p>
                <form action="" className="w-100">
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      id="Email"
                      name="Email"
                      placeholder="Email address"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      type="email"
                    />
                  </div>

                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      name="password"
                      placeholder="Password"
                      margin="normal"
                      variant="outlined"
                      type="password"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                            >
                              {/* <img src={Eye} alt="Show password" /> */}
                              <img src={EyeLine} alt="Hide password" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                      <div className="forgot-link">
                        <Link to="/">Forgot password?</Link>
                      </div>
                 
                  <div className="auth-action-control">
                      <PrimaryButton>
                        Sign in
                        <img src={Right_Arrow} alt="Right_Arrow" />
                      </PrimaryButton>
                  </div>
                  <div className="auth-info-text">
                  Don’t have an account? <Link className="auth-link" to="/">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
