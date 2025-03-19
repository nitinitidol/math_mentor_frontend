import React from "react";
import "../CourseList/CourseList.scss";
import { Autocomplete, ListItem, ListItemText, TextField } from "@mui/material";
import TimeIcon from "../../assets/images/vactor/sm-time.svg";
import CalendarIcon from "../../assets/images/vactor/sm-calender.svg";
import { PrimaryButton } from "../AllButtons/AllButtons";
import CourseDetailsDilaog from "../CourseDetailsDilaog/CourseDetailsDilaog";

const selectRelevant = [
  { label: "Relevant1 " },
  { label: "Relevant2 " },
  { label: "Relevant3" },
];

const CourseList = () => {
  return (
    <>
      <div className="course-list-wrapper">
        <div className="course-list-head-content">
          <h4>Recommended Courses for You</h4>
          <p>
            Based on your diagnostic results, these courses are tailored to
            boost your math skills!
          </p>
          <div className="relevant-field-block">
            <div className="input-form-field-wrapper">
              <Autocomplete
                className="Relevant"
                id="Relevant"
                options={selectRelevant}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="out-label-input-text"
                    placeholder="Relevant"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="Relevant"
                  />
                )}
                renderOption={(props, option) => (
                  <ListItem className="autocomplete-list-items" {...props}>
                    <ListItemText
                      sx={{ padding: "0px", margin: "0px" }}
                      primary={option.label}
                    />
                  </ListItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="course-list-body">
            <div className="row gy-4">
                <div className="col-md-4">
                    <div className="course-list-card">
                            <div className="course-list-card-body">
                                <div className="course-list-badge beginner-badge">
                                    Beginner
                                </div>
                                <h4 className="card-title">Algebra Fundamentals</h4>
                                <p className="card-subtitle">Master the basics of algebra with interactive exercises and real-world applications.</p>
                                <div className="course-duration-block">
                                    <div className="course-weeks"><img src={TimeIcon} alt="" /> 4 weeks</div>
                                    <div className="course-hrs-weeks"><img src={CalendarIcon} alt="" />2 hrs/week</div>
                                </div>
                            </div>
                            <div className="course-list-card-footer">
                                <PrimaryButton>Start Course</PrimaryButton>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="course-list-card">
                            <div className="course-list-card-body">
                                <div className="course-list-badge intermediate-badge">
                                Intermediate
                                </div>
                                <h4 className="card-title">Geometry Essentials</h4>
                                <p className="card-subtitle">Learn geometric concepts through practical problems.</p>
                                <div className="course-duration-block">
                                    <div className="course-weeks"><img src={TimeIcon} alt="" /> 3 weeks</div>
                                    <div className="course-hrs-weeks"><img src={CalendarIcon} alt="" />4 hrs/week</div>
                                </div>
                            </div>
                            <div className="course-list-card-footer">
                                <PrimaryButton>Start Course</PrimaryButton>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="course-list-card">
                            <div className="course-list-card-body">
                                <div className="course-list-badge advance-badge">
                                    Advance
                                </div>
                                <h4 className="card-title">Calculus Mastery</h4>
                                <p className="card-subtitle">Deep dive into differential and integral calculus with expert guidance.</p>
                                <div className="course-duration-block">
                                    <div className="course-weeks"><img src={TimeIcon} alt="" /> 8 weeks</div>
                                    <div className="course-hrs-weeks"><img src={CalendarIcon} alt="" />4 hrs/week</div>
                                </div>
                            </div>
                            <div className="course-list-card-footer">
                                <PrimaryButton>Start Course</PrimaryButton>
                            </div>
                    </div>
                </div>

            </div>
        </div>
      {/* course details dilaog  */}
      <CourseDetailsDilaog/>
      </div>

    </>
  );
};

export default CourseList;
