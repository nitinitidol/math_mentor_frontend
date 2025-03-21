import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import { Button, TextField } from "@mui/material";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendForgotPasswordRequest } from "../../Services/auth.service";
import { AppDispatch, RootState } from "../../Store/store";
import { openSnackbar } from "../../Slice/snackbarSlice";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";

const ForgotPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { email, loading, error, message } = useSelector(
    (state: RootState) => state.forgotPassword
  );
  
  const [emailInput, setEmailInput] = React.useState<string>(email || "");
  const [emailError, setEmailError] = React.useState<string>("");
  const [otpBtnDisabled, setOtpBtnDisabled] = React.useState(true);
  const navigate=useNavigate();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailInput(value);

    
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      setOtpBtnDisabled(true);
    } else {
      setEmailError("");
      setOtpBtnDisabled(false);
    }
  };

  
  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (emailRegex.test(emailInput)) {
      console.log("email",emailInput);
      const email={email:emailInput};
      dispatch(sendForgotPasswordRequest(email));
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const resetHandler=(e: React.FormEvent)=>{
      e.preventDefault();
      
    
    if (emailRegex.test(emailInput)) {
      console.log("email",emailInput);
      const email={email:emailInput};
      dispatch(sendForgotPasswordRequest(email));
    } else {
      setEmailError("Please enter a valid email address.");
    }
  }

  
  useEffect(() => {
    if (message) {
      setEmailInput("");
      navigate("/send-otp");
    }
  }, [message,navigate]);

  useEffect(() => {
    if (error) {
      dispatch(openSnackbar({ message: error, severity: "error" }));
    }
  }, [error, dispatch]);

  const backToLogin=()=>{
    navigate("/login")
  }
  return (
    <>
      <div className="auth-wrapper">
        <div className="row mx-0 h-100">
          <TitleComponent />
          <div className="col-md-6 p-0">
            <div className="auth-form-block">
              <div className="auth-form-content-block">
                <div className="auth-logo">
                  <img src={Auth_OTP_Logo} alt="" />
                </div>
                <p className="content-dsc-text">Forgot Your Password?</p>
                <p className="content-subdsc-text">
                  No worries! Enter your email, and we'll send you a 6-digit
                  OTP.
                </p>
                <form onSubmit={handleSendOTP} className="w-100">
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      id="email"
                      name="email"
                      placeholder="Enter email here"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      type="email"
                      value={emailInput}
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <p
                        style={{
                          fontSize: "12px",
                          color: "red",
                          marginLeft: "0",
                          fontWeight: "normal",
                          alignSelf: "flex-start",
                          marginTop: "-5px",
                        }}
                      > 
                        {emailError}
                      </p>
                    )}
                  </div>

                  <div className="auth-action-control">
                    <PrimaryButton disabled={otpBtnDisabled || loading} onClick={handleSendOTP} 
                    style={{backgroundColor: (otpBtnDisabled || loading) ? "#848884" : "" , marginTop:"-5px"}}>
                      {"Send OTP"}
                      <img src={Right_Arrow} alt="Right_Arrow" />
                    </PrimaryButton>
                  </div>
                  <div className="auth-info-text">
                    Didn't receive an email,{" "}
                    <Link className="auth-link" to="/" onClick={resetHandler}>
                      Resend?
                    </Link>
                  </div>
                  <div className="back-btn">
                    <Button variant="text" onClick={backToLogin}>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2784_2098)">
                          <path
                            d="M0.475098 6.38213C0.133301 6.72393 0.133301 7.279 0.475098 7.6208L4.8501 11.9958C5.19189 12.3376 5.74697 12.3376 6.08877 11.9958C6.43057 11.654 6.43057 11.0989 6.08877 10.7571L3.204 7.8751H11.5931C12.0771 7.8751 12.4681 7.48408 12.4681 7.0001C12.4681 6.51611 12.0771 6.1251 11.5931 6.1251H3.20674L6.08604 3.24307C6.42783 2.90127 6.42783 2.34619 6.08604 2.00439C5.74424 1.6626 5.18916 1.6626 4.84736 2.00439L0.472363 6.3794L0.475098 6.38213Z"
                            fill="#9CA3AF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2784_2098">
                            <path
                              d="M0.21875 0H12.4688V14H0.21875V0Z"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>{" "}
                      Back to Login
                    </Button>
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

export default ForgotPassword;
