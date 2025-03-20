import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import EditIcon from "../../assets/images/vactor/edit-icon.svg";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";

const SendOTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);


  const handleChange = (index: number, value: string) => {
   
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

  
    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };


  const isOtpComplete = otp.every((digit) => digit !== "");

  console.log("Otp " , otp)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOtpComplete) {
      navigate("/reset-password"); // Redirect to Reset Password Page
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
                
                {/* ✅ OTP Form */}
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="otp-input-form-field">
                    {otp.map((digit, index) => (
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
                    <PrimaryButton type="submit" disabled={!isOtpComplete}>
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
