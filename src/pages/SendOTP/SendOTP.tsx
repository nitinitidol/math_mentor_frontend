import "../Login/Login.scss";
import Auth_OTP_Logo from "../../assets/images/logo/otp-logo.svg";
import EditIcon from "../../assets/images/vactor/edit-icon.svg";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";

const SendOTP = () => {
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
                <form action="" className="w-100">
                  <div className="otp-input-form-field">
                    <input className="otp-input" type="text" />
                    <input className="otp-input" type="text" />
                    <input className="otp-input" type="text" />
                    <input className="otp-input" type="text" />
                    <input className="otp-input" type="text" />
                    <input className="otp-input" type="text" />
                  </div>

                  <div className="auth-action-control">
                    <PrimaryButton>
                     Reset Now
                    </PrimaryButton>
                  </div>
                  <div className="auth-info-text">
                  prince_cummerata29@hotmail.com
                    <Link className="auth-link" to="/">
                     <img src={EditIcon} alt="" />
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

export default SendOTP;
