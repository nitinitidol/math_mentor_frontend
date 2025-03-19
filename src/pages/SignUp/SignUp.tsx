import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { signUpPostCall } from "../../redux/slices/authSlice";
import { AppDispatch } from "../../redux/store";


const selectGrade = [
  { label: "Grade1"},
  { label: "Grade2"},
  { label: "Grade3"},  
];

const initialValues = {
  name: "",
  email: "",
  password:"",
  confirm_password:"",
  grade:null,
  birth_date:null,
};

const validationSchema = Yup.object({
  name: Yup.string().min(5).max(35).required("Full Name is required"),
  grade: Yup.number()
  .required("Grade is required")
  .nullable()
  .typeError("Grade must be a number"),
  birth_date: Yup.date().nullable().required("Date of Birth is required").typeError("Invalid Date"),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required') 
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid email format' 
    ),

  password: Yup.string().min(6).required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setFieldTouched } =
  useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
      Object.keys(initialValues).forEach(key => {
        setFieldTouched(key, true, true);
      });

      
      dispatch(signUpPostCall(values))
        .unwrap() 
        .then(() => {
          console.log("User signed up successfully!");
          action.resetForm();
        })
        .catch((error:any) => {
          console.error("Error during sign-up:", error);
        });
  
      console.log("Submitted values:", values);
    },
  });;

  const handleDateChange = (newValue: Dayjs | null) => {
    setFieldValue("birth_date", newValue ? newValue.format("DD-MM-YYYY") : null);
    setFieldTouched("birth_date", true, true);
  };

  const handleGradeChange = (grade: string) => {
    const match = grade.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

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
                <form onSubmit={handleSubmit} className="w-100">
                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error" style={{
                        fontSize: '12px',
                        color: 'red',
                        marginLeft: '0',
                        fontWeight: 'normal',
                        alignSelf: 'flex-start',
                        marginTop: '-5px'
                      }}>{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="input-form-field-wrapper">
                    <Autocomplete
                      className="grade"
                      id="grade"
                      options={selectGrade}
                      getOptionLabel={(option) => option.label}
                      value={values.grade ? selectGrade.find(option => handleGradeChange(option.label) === values.grade) : null}
                      onChange={(_, newValue) => {
                        const gradeNumber = handleGradeChange(newValue ? newValue.label : "");
                        setFieldValue("grade", gradeNumber);
                        setFieldTouched("grade", true, true);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="out-label-input-text"
                          placeholder="Grade"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          name="grade"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.grade}
                        />
                      )}
                      renderOption={(props, option) => (
                        <ListItem className="autocomplete-list-items" {...props}>
                          <ListItemText sx={{ padding: "0px", margin: "0px" }} primary={option.label} />
                        </ListItem>
                      )}
                    />
                    {errors.grade && touched.grade ? (
                      <p className="form-error" style={{
                        fontSize: '12px',
                        color: 'red',
                        marginLeft: '0',
                        fontWeight: 'normal',
                        alignSelf: 'flex-start',
                        marginTop: '-5px'
                      }}>{errors.grade}</p>
                    ) : null}
                  </div>

                  <div className="input-form-field-wrapper datepicker-field-wrapper">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className="out-label-input-text"
                            fullWidth
                            name="birth_date"
                            margin="normal"
                            variant="outlined"
                            value={values.birth_date ? dayjs(values.birth_date).format("DD/MM/YYYY") : ""}
                            onBlur={() => setFieldTouched("birth_date", true)}
                          />
                        )}
                        value={values.birth_date ? dayjs(values.birth_date) : null}
                        onChange={handleDateChange}
                      />
                    </LocalizationProvider>
                    {errors.birth_date && touched.birth_date ? <p className="form-error" style={{
                      fontSize: '12px',
                      color: 'red',
                      marginLeft: '0',
                      fontWeight: 'normal',
                      alignSelf: 'flex-start',
                      marginTop: '-5px'
                    }}>{errors.birth_date}</p> : null}
                  </div>

                  <div className="input-form-field-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                      className="out-label-input-text"
                      id="email"
                      name="email"
                      placeholder="hello@yuli.com"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.email && touched.email ? (
                      <p style={{
                        fontSize: '12px',
                        color: 'red',
                        marginLeft: '0',
                        fontWeight: 'normal',
                        alignSelf: 'flex-start',
                        marginTop: '-5px' 
                      }}>
                        {errors.email}
                      </p>
                    ) : null}
                  </div>


                  <div className="input-form-field-wrapper">
                    <TextField
                      id="pass"
                      className="out-label-input-text"
                      name="password"
                      placeholder="Password"
                      margin="normal"
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" edge="end" onClick={handleTogglePassword}>
                              <img src={Eye} alt="Show password" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error" style={{
                        fontSize: '12px',
                        color: 'red',
                        marginLeft: '0',
                        fontWeight: 'normal',
                        alignSelf: 'flex-start',
                        marginTop: '-5px'
                      }}>{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="input-form-field-wrapper">
                    <TextField
                      className="out-label-input-text"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      margin="normal"
                      variant="outlined"
                      type={showConfirmPassword ? "text" : "password"}
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" edge="end" onClick={handleToggleConfirmPassword}>
                              <img src={Eye} alt="Show password" />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error" style={{
                        fontSize: '12px',
                        color: 'red',
                        marginLeft: '0',
                        fontWeight: 'normal',
                        alignSelf: 'flex-start',
                        marginTop: '-5px'
                        
                      }}>{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="auth-action-control">

                    <PrimaryButton type="submit">
                      Sign Up
                      <img src={Right_Arrow} alt="Right_Arrow" />
                    </PrimaryButton>

                  </div>
                  <div className="auth-info-text">
                    Already have an account? <Link className="auth-link" to="/">Sign in</Link>
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