
import "../SignUp/SignUp.scss";
import Banner1 from "../../assets/images/banner/auth-banner.svg";
import Auth_Logo from "../../assets/images/logo/logo.svg";
import Eye from "../../assets/images/vactor/eye.svg";
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";

const selectGrade = [
  { label: "Grade1 " },
  { label: "Grade2 " },
  { label: "Grade3" },
];

const SignUp = () => {
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
                  Your AI-powered learning companion
                </p>
                <form action="" className="w-100">
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      id="full name"
                      name="full name"
                      placeholder="Full Name"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      type="text"
                    />
                  </div>

                  <div className="input-form-field-wrapper">
                    <Autocomplete
                      className="city"
                      id="city"
                      options={selectGrade}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="out-label-input-text"
                          placeholder="Grade"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          name="city"
                        />
                      )}
                      renderOption={(props, option) => (
                        <ListItem
                          className="autocomplete-list-items"
                          {...props}
                        >
                          <ListItemText
                            sx={{ padding: "0px", margin: "0px" }}
                            primary={option.label}
                          />
                        </ListItem>
                      )}
                    />
                  </div>

                  <div className="input-form-field-wrapper datepicker-field-wrapper">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            className="out-label-input-text"
                            fullWidth
                            name="dob"
                            margin="normal"
                            variant="outlined"
                          />
                        )}
                        value={null}
                        onChange={() => {}}
                      />
                    </LocalizationProvider>
                  </div>

                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      id="email"
                      name="email"
                      placeholder="hello@yuli.com"
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
                              <img src={Eye} alt="Show password" />
                              {/* <img src={EyeLine} alt="Hide password" /> */}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      name="Confirm Password"
                      placeholder="Confirm Password"
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
                              <img src={Eye} alt="Show password" />
                              {/* <img src={EyeLine} alt="Hide password" /> */}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="auth-action-control">
                      <PrimaryButton>
                        Sign Up
                        <img src={Right_Arrow} alt="Right_Arrow" />
                      </PrimaryButton>
                  </div>
                  <div className="auth-info-text">
                  Already have an account? <Link className="auth-link" to="/sign-in">Sign in</Link>
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

export default SignUp;
