import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import EditIcon from "../../assets/images/vactor/edit-icon.svg";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";
import { useDispatch } from "react-redux";
import { setOtp } from "../../Slice/credentialSlice";

const SendOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch() ; 

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);


  const handleChange = (index: number, value: string) => {
   
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

  
    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && otpValues[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };


  const isOtpComplete = otpValues.every((digit) => digit !== "");

  console.log("Otp " , otpValues)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOtpComplete) {
      dispatch(setOtp(otpValues.join(""))) ; 
      navigate("/reset_password"); 
    }
  };

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
                <p className="content-dsc-text">Forgot Your Password?</p>
                <p className="content-subdsc-text">
                  No worries! Enter your email, and we'll send you a 6-digit OTP.
                </p>
                
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="otp-input-form-field">
                    {otpValues.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        className="otp-input"
                        type="text"
                        value={digit}
                        maxLength={1}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    ))}
                  </div>

                  <div className="auth-action-control">
                    <PrimaryButton
                      type="submit"
                      disabled={!isOtpComplete}
                      style={{
                        backgroundColor: isOtpComplete ? "#4F46E5" : "#505050", 
                        color: "#fff",
                        cursor: isOtpComplete ? "pointer" : "not-allowed",
                      }}
                    >
                      Reset Now
                    </PrimaryButton>
                  </div>
                  
                  <div className="auth-info-text">
                    prince_cummerata29@hotmail.com
                    <a className="auth-link" href="/">
                      <img src={EditIcon} alt="Edit" />
                    </a>
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

export default SendOTP;
