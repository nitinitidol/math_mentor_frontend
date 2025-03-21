import { useState } from "react";
import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import Eye from "../../assets/images/vactor/eye.svg"; // ✅ Eye (Show Password)
import EyeLine from "../../assets/images/vactor/eye-line.svg"; // ✅ Eye with line (Hide Password)
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link, useNavigate } from "react-router-dom";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";


import { useAppDispatch, useAppSelector } from "../../Store/store";
import { resetPassword } from "../../Services/auth.service";
import { openSnackbar } from "../../Slice/snackbarSlice";

const ResetPassword = () => {
  const dispatch = useAppDispatch() ; 
  const email = useAppSelector(state => state.credentials.email) ; 
  const otp = useAppSelector(state => state.credentials.otp) ; 
  const navigate = useNavigate() ; 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 
  const validatePassword = (pwd: string) => {
    if (pwd.length < 6) return "Password must be at least 6 characters";
    if (!/[0-9]/.test(pwd)) return "Password must contain at least one number";
    if (!/[!@#$%^&*]/.test(pwd)) return "Password must contain at least one special character (!@#$%^&*)";
    return "";
  };

  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value)); // Validate password
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password ? "Passwords do not match" : "");
  };

  const handleSubmit = async  (e : any) => {
    e.preventDefault() ;
    if(password === confirmPassword){
      const credentialsValue    = {
        email : email, 
        otp : otp , 
        new_password : password  , 
      }
      dispatch(resetPassword(credentialsValue)).unwrap().then((response) => {
        if(response.status) {
          dispatch(openSnackbar({message : response.message , severity : "success"}));
          setTimeout(() => {navigate("/login")} , 1000)
        }
        else {
          dispatch(openSnackbar({message : "Something went wrong" , severity : "error"}));

        }
      }).catch((error : any) => {
        console.log("Not able to reset password" , error)
      })  ; 
      
    }
  }

  const isFormValid = password !== "" && confirmPassword !== "" && passwordError === "" && confirmPasswordError === "";
 
  return (
    <>
      <div className="auth-wrapper">
        <div className="row mx-0 h-100">
          <TitleComponent />
          <div className="col-md-6 p-0">
            <div className="auth-form-block">
              <div className="auth-form-content-block">
                <div className="auth-logo">
                  <img src={Auth_OTP_Logo} alt="OTP Logo" />
                </div>
                <p className="content-dsc-text">Reset Your Password?</p>
                <p className="content-subdsc-text">
                  Password was successfully sent to the email ID, Kindly enter the password below.
                </p>
                <div className="w-100">
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      name="password"
                      placeholder="New Password"
                      margin="normal"
                      variant="outlined"
                      type={showPassword ? "text" : "password"} 
                      fullWidth
                      value={password}
                      onChange={handlePasswordChange}
                      error={!!passwordError}
                      helperText={passwordError} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)} 
                            >
                              <img src={showPassword ? Eye : EyeLine} alt="Toggle password visibility" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      margin="normal"
                      variant="outlined"
                      type={showConfirmPassword ? "text" : "password"}
                      fullWidth
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      error={!!confirmPasswordError}
                      helperText={confirmPasswordError} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                            >
                              <img src={showConfirmPassword ? Eye : EyeLine} alt="Toggle password visibility" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  
                  <div className="auth-action-control">
                    <PrimaryButton
                      type="submit"
                      disabled={!isFormValid}
                      style={{
                        backgroundColor: isFormValid ? "#4F46E5" : "#505050", 
                        color: "#fff",
                        cursor: isFormValid ? "pointer" : "not-allowed",
                      }}
                      onClick={(e)=> handleSubmit(e)}
                    >
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
                  </div>
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
