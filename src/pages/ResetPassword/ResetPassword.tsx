import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import EyeLine from "../../assets/images/vactor/eye-line.svg";
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";

const ResetPassword = () => {
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
                <p className="content-dsc-text">Reset Your Password?</p>
                <p className="content-subdsc-text">
                Password was successfully sent to the email ID, Kindly enter the password below.
                </p>
                <form action="" className="w-100">
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
                              <img src={EyeLine} alt="Hide password" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
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

                  <div className="auth-action-control">
                    <PrimaryButton>
                    Reset Password
                      <img src={Right_Arrow} alt="Right_Arrow" />
                    </PrimaryButton>
                  </div>
                  <div className="auth-info-text">
                  Don’t have an account?
                    <Link className="auth-link" to="/">
                      Sign up
                    </Link>
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

export default ResetPassword;
