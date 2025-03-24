import React, { useState } from "react";
import "../UserProfile/UserProfile.scss";
import UserImg from "../../assets/images/banner/test-user.jpg";
import CameraImgIcon from "../../assets/images/vactor/camera-icon.svg";
import EditIcon from "../../assets/images/vactor/edit-icon.svg";
import CheckIcon from "../../assets/images/vactor/green-check-round.svg";
import RightIcon from "../../assets/images/vactor/right-black-arrow.svg";
import RightCheckIcon from "../../assets/images/vactor/sm-select-right.svg";
import Eye from "../../assets/images/vactor/eye.svg"; // ✅ Eye (Show Password)
import EyeLine from "../../assets/images/vactor/eye-line.svg"; // ✅ Eye with line (Hide Password)
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  Switch,
  TextField,
} from "@mui/material";
import {
  LightButton,
  PrimaryButton,
} from "../../components/AllButtons/AllButtons";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#4F46E5",
        ...theme.applyStyles("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

const UserProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  // State for the grade and email
  const [grade, setGrade] = useState("9th Grade");
  const [email, setEmail] = useState("student@example.com");
  const [date, setDate] = useState("2025-03-21");

  // Handle edit button click to toggle the editable state
  const handleEditClick = () => {
    setIsEditable(true);
  };

  // Handle save button click to save changes and switch back to read-only
  const handleSaveClick = () => {
    setIsEditable(false);
    // Here you can add your save logic (e.g., sending the data to a server or API)
  };

  // Handle cancel button click to cancel any changes and switch back to read-only
  const handleCancelClick = () => {
    setIsEditable(false);
    // Reset the fields to the initial values (optional)
    setGrade("9th Grade");
    setEmail("student@example.com");
    setDate("2025-03-21");
  };

  return (
    <>
      <div className="user-profile-wrapper">
        <div>
          <div className="row gy-4">
            <div className="col-md-7 col-lg-8">
              <div className="custom-user-card">
                <div className="custom-user-card-header">
                  <div className="user-profile-block">
                    <div className="user-img">
                      <img src={UserImg} alt="" />
                      <label className="camera-icon-img" htmlFor="UserProfile">
                        <img src={CameraImgIcon} alt="" />
                        <input id="UserProfile" type="file" hidden />
                      </label>
                    </div>
                    <div className="user-info">
                      <div className="user-name">Clifton Treutel</div>
                      <div className="user-grade">9th Grade Student</div>
                    </div>
                  </div>
                </div>
                <div className="custom-user-card-body">
                  <div className="custom-user-card-body-title">
                    Profile Details
                  </div>

                  <div className="profile-details-listing">
                    <div className="details-listing-items">
                      <div className="details-listing-items-edits">
                        <div className="details-label">Email</div>
                        <div className="input-value-text">
                          {isEditable ? (
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          ) : (
                            email
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="details-listing-items">
                      <div className="details-listing-items-edits">
                        <div className="details-label">Grade Level</div>
                        <div className="input-value-text">
                          {isEditable ? (
                            <input
                              type="text"
                              value={grade}
                              onChange={(e) => setGrade(e.target.value)}
                            />
                          ) : (
                            grade
                          )}
                        </div>
                      </div>
                      <div className="details-listing-items-action">
                        {isEditable ? (
                          <>
                            <PrimaryButton
                              className="input-save-btn"
                              onClick={handleSaveClick}
                            >
                              Save
                            </PrimaryButton>
                            <LightButton
                              className="input-cancel-btn"
                              onClick={handleCancelClick}
                            >
                              Cancel
                            </LightButton>
                          </>
                        ) : (
                          <Button
                            className="input-edit-btn"
                            onClick={handleEditClick}
                          >
                            <img src={EditIcon} alt="Edit" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="details-listing-items">
                      <div className="details-listing-items-edits">
                        <div className="details-label">Date of Birth</div>
                        <div className="input-value-text">
                          {isEditable ? (
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            />
                          ) : (
                            // <LocalizationProvider dateAdapter={AdapterDayjs}>
                            //   <DemoContainer components={['DatePicker']}>
                            //   <DatePicker
                            //     label="Controlled picker"
                            //     value={value}
                            //     onChange={(newValue) => setValue(newValue)}
                            //   />
                            //   </DemoContainer>
                            // </LocalizationProvider>
                            date
                          )}
                        </div>
                      </div>
                      <div className="details-listing-items-action">
                        {isEditable ? (
                          <>
                            <PrimaryButton
                              className="input-save-btn"
                              onClick={handleSaveClick}
                            >
                              Save
                            </PrimaryButton>
                            <LightButton
                              className="input-cancel-btn"
                              onClick={handleCancelClick}
                            >
                              Cancel
                            </LightButton>
                          </>
                        ) : (
                          <Button
                            className="input-edit-btn"
                            onClick={handleEditClick}
                          >
                            <img src={EditIcon} alt="Edit" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="details-listing-items">
                      <div className="details-listing-items-edits">
                        <div className="details-label">Member Since</div>
                        <div className="input-value-text">
                          {isEditable ? (
                            <input
                              type="text"
                              value={"January 15, 2025"}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          ) : (
                            "January 15, 2025"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="user-custom-card-group">
                <div className="custom-user-card plan-card">
                  <div className="plan-card-header">
                    <div className="card-title">Current Plan</div>
                    <Button className="free-plan-btn">Free Plan</Button>
                  </div>
                  <div className="plan-card-body">
                    <div className="plan-details-list">
                      <div className="plan-details-list-title">
                        Upgrade to Premium for unlimited access
                      </div>
                      <div className="plan-details-list-items">
                        <img src={CheckIcon} alt="" />
                        <div className="details-list-items-text">
                          Unlimited tokens
                        </div>
                      </div>
                      <div className="plan-details-list-items">
                        <img src={CheckIcon} alt="" />
                        <div className="details-list-items-text">
                          Advanced features
                        </div>
                      </div>
                      <div className="plan-details-list-items">
                        <img src={CheckIcon} alt="" />
                        <div className="details-list-items-text">
                          Priority support
                        </div>
                      </div>
                    </div>
                    <div className="plan-card-action">
                      <PrimaryButton>Upgrade Now</PrimaryButton>
                    </div>
                  </div>
                </div>
                <div className="custom-user-card setting-card">
                  <div className="plan-card-header">
                    <div className="card-title">Setting</div>
                  </div>
                  {/* setting card body  */}
                  <div className="setting-card-body ">
                    <Button>
                      <span>Change Password</span>{" "}
                      <img src={RightIcon} alt="" />
                    </Button>
                    <div>
                      <div className="notification-control-field">
                        Notifications
                        <div className="notification-control-btn">
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{ alignItems: "center" }}
                          >
                            <AntSwitch
                              defaultChecked
                              inputProps={{ "aria-label": "ant design" }}
                            />
                          </Stack>
                        </div>
                      </div>
                    </div>
                    <Button className="sign-out-btn">Sign Out</Button>
                  </div>

                  {/* Change Password card body  */}
                  <div className="change-password-body d-none">
                    <div className="input-form-field-wrapper">
                      <TextField
                        className="out-label-input-text"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                <img
                                  src={EyeLine}
                                  alt="Toggle password visibility"
                                />
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
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                <img
                                  src={EyeLine}
                                  alt="Toggle password visibility"
                                />
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
                        fullWidth
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                              >
                                <img
                                  src={EyeLine}
                                  alt="Toggle password visibility"
                                />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <Divider />
                    <div className="change-password-action">
                      <LightButton> Cancel </LightButton>
                      <PrimaryButton> Save </PrimaryButton>
                    </div>
                  </div>

                  {/* Change Password successfully reset card body  */}
                  <div className="successfully-reset-body d-none">
                    <div className="successfully-reset-icon">
                      <img src={RightCheckIcon} alt="" />
                    </div>
                    <div className="successfully-dsc-block">
                        <div className="successfully-title">Password Successfully Reset</div>
                        <div className="successfully-dsc">Your password has been updated. Sign in to continue learning with YULI.</div>
                    </div>
                    <div className="successfully-reset-action">
                    <PrimaryButton> Sign in </PrimaryButton>
                    </div>
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

export default UserProfile;
