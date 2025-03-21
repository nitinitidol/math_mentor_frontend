import { useState } from "react";
import "../Login/Login.scss";
import Auth_Logo from "../../assets/images/logo/logo.svg";
import Eye from "../../assets/images/vactor/eye.svg";
import EyeLine from "../../assets/images/vactor/eye-line.svg";
import Right_Arrow from "../../assets/images/vactor/arrow-right.svg";
import {  IconButton, InputAdornment, TextField } from "@mui/material";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/auth.service";
import { useAppDispatch } from "../../Store/store";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { openSnackbar } from "../../Slice/snackbarSlice";
import TitleComponent from "../../components/CommonElements/TitleComponent/TitleComponent";
const Login = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid email format")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

 
  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      const response = await dispatch(loginUser(values)).unwrap();
      console.log("response data " , response)
      if (response.status) {
        console.log("token",response.data.access_token)
        localStorage.setItem("auth-token", response.data.access_token);
        dispatch(openSnackbar({message : response.message + " 🎉" , severity : "success" }));
      } else {
        dispatch(openSnackbar({message : response.message || "Invalid Credentials ❌" , severity : "error"  }))
      }
    } catch (error) {
      dispatch(openSnackbar({message : "Login failed ❌" , severity : "error"}))
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
                  <img src={Auth_Logo} alt="Logo" />
                </div>
                <p className="content-dsc-text">Welcome Back!</p>
                <Formik
                  initialValues={{ username: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, handleChange, values }) => (
                    <Form className="w-100">
                      <div className="input-form-field-wrapper">
                        <TextField
                          className="out-label-input-text"
                          id="username"
                          name="username"
                          placeholder="Email address"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          type="email"
                          value={values.username}
                          onChange={handleChange}
                          error={touched.username && Boolean(errors.username)}
                          helperText={touched.username && errors.username}
                        />
                      </div>

                      <div className="input-form-field-wrapper">
                        <TextField
                          className="out-label-input-text"
                          name="password"
                          placeholder="Password"
                          margin="normal"
                          variant="outlined"
                          type={showPassword ? "text" : "password"}
                          fullWidth
                          value={values.password}
                          onChange={handleChange}
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  edge="end"
                                  onClick={() => setShowPassword(!showPassword)}
                                  disabled={values.password.length === 0}
                                >
                                  <img src={showPassword ? Eye : EyeLine} alt="Toggle password" />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>

                      <div className="forgot-link">
                        <Link to="/forgot-password">Forgot password?</Link>
                      </div>

                      <div className="auth-action-control">
                        <PrimaryButton type="submit">
                          Sign in
                          <img src={Right_Arrow} alt="Right_Arrow" />
                        </PrimaryButton>
                      </div>

                      <div className="auth-info-text">
                        Don’t have an account?{" "}
                        <Link className="auth-link" to="/sign-up">
                          Sign up
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
