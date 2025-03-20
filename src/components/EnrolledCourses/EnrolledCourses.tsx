import React from "react";
import "../EnrolledCourses/EnrolledCourses.scss";
import BackArrow from "../../assets/images/vactor/back-arrow.svg";
import TagIcon from "../../assets/images/vactor/tag-icon.svg";
import BookIcon from "../../assets/images/vactor/sm-balck-book.svg";
import WatchIcon from "../../assets/images/vactor/sm-watch.svg";
import StarIcon from "../../assets/images/vactor/line-star-icon.svg";
import RoundCheckIcon from "../../assets/images/vactor/green-check-round.svg";
import BlueRoundCheckIcon from "../../assets/images/vactor/blue-round-check.svg";
import DisabledRoundCheckIcon from "../../assets/images/vactor/disabled-check.svg";
import GraphIcon from "../../assets/images/vactor/graph-green.svg";
import LampIcon from "../../assets/images/vactor/lamp-yellow.svg";
import FireIcon from "../../assets/images/vactor/fire-icon.svg";
import BlueWatchIcon from "../../assets/images/vactor/blue-watch.svg";
import NetworkIcon from "../../assets/images/vactor/green-network.svg";
import Ai_Icon from "../../assets/images/vactor/Ai-icon.svg";
import SelectRightIcon from "../../assets/images/vactor/sm-select-right.svg";
import CloseIcon from "../../assets/images/vactor/close-line.svg";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  linearProgressClasses,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";

const EnrolledCourses = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#4F46E5",
      ...theme.applyStyles("dark", {
        backgroundColor: "#4F46E5",
      }),
    },
  }));

  return (
    <>
      <div className="courses-wrapper">
        <div className="courses-header-wrapper">
          <div className="courses-header-title">
            <img src={BackArrow} alt="" />
            <span>Enrolled Courses</span>
          </div>
          <p className="courses-header-dsc">
            Based on your diagnostic results, these courses are tailored to
            boost your math skills!
          </p>
        </div>

        <div className="courses-content-body-wrapper">
          {/* for enrolled corses card */}
          <div className="courses-card d-none">
            <div className="courses-card-head">
              <div className="course-list-badge beginner-badge">Beginner</div>
              <div>
                <img src={TagIcon} alt="" />
              </div>
            </div>
            <div className="courses-card-body">
              <h4 className="courses-card-title">Algebra Fundamentals</h4>
              <p className="courses-card-dsc">
                Master the basics of algebra with interactive exercises and
                real-world applications.
              </p>
              <div className="coreses-progress">
                <div className="coreses-progress-tracker">
                  <div className="coreses-progress-value">
                    <h3>3%</h3>{" "}
                    <span className="progress-label">Coreses progress</span>
                  </div>
                  <div className="time-duration-label">
                    <span>
                      {" "}
                      <img src={WatchIcon} alt="" /> 15 hours left{" "}
                    </span>
                    <span>
                      {" "}
                      <img src={BookIcon} alt="" /> 12 lessons remaining{" "}
                    </span>
                  </div>
                </div>
                <div className="overall-score-level-progress">
                  <BorderLinearProgress variant="determinate" value={3} />
                </div>
              </div>
              <div className="coreses-card-action">
                <PrimaryButton>Continue Learning</PrimaryButton>
              </div>
            </div>
          </div>

          {/* for Ongoing Exercise card */}
          <div className="courses-card d-none">
            <div className="courses-card-body">
              <div className="coreses-progress">
                <div className="coreses-progress-tracker">
                  <div className="coreses-progress-value">
                    <h3>3%</h3>{" "}
                    <span className="progress-label">Coreses progress</span>
                  </div>
                  <div className="time-duration-label">
                    <span>
                      {" "}
                      <img src={WatchIcon} alt="" /> 15 hours left{" "}
                    </span>
                    <span>
                      {" "}
                      <img src={BookIcon} alt="" /> 12 lessons remaining{" "}
                    </span>
                  </div>
                </div>
                <div className="overall-score-level-progress">
                  <BorderLinearProgress variant="determinate" value={3} />
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 d-none">
            <div className="col-md-7 col-lg-8">
              <div className="courses-card course-content-card">
                <div className="course-content-card-title">
                  <span>Course Content</span>
                </div>
                <div className="course-content-card-subtitle">
                  <span className="card-subtitle">Course Content</span>
                  <span className="subtitle-notes">3 of 4 completed</span>
                </div>

                <div className="completed-leasson-list">
                  <div className="leasson-list-items">
                    <div className="leasson-items-label">
                      <img src={RoundCheckIcon} alt="" />
                      Introduction to Quadratic Equations
                    </div>
                    <div className="leasson-items-duration">45 min</div>
                  </div>
                  <div className="leasson-list-items">
                    <div className="leasson-items-label">
                      <img src={RoundCheckIcon} alt="" />
                      Solving Basic Quadratic Equations
                    </div>
                    <div className="leasson-items-duration">1 hours</div>
                  </div>
                </div>

                <div className="course-content-card-subtitle">
                  <span className="card-subtitle">In Progress</span>
                  <span className="subtitle-notes">1 lesson in progress</span>
                </div>

                <div className="inprogres-lesson-block">
                  <div className="inprogres-lesson-label-head">
                    <div className="inprogres-lesson-label">
                      <img src={BlueRoundCheckIcon} alt="" />
                      <span>Complex Numbers and Operations</span>
                    </div>
                    <div className="inprogres-lesson-timeduration">2 hours</div>
                  </div>
                  <div className="inprogres-progress-bar">
                    <div className="overall-score-level-progress">
                      <BorderLinearProgress variant="determinate" value={3} />
                    </div>
                    <PrimaryButton> Resume Lesson</PrimaryButton>
                  </div>
                </div>

                <div className="completed-leasson-list disabled-list">
                  <div className="leasson-list-items">
                    <div className="leasson-items-label">
                      <img src={DisabledRoundCheckIcon} alt="" />
                      Advanced Applications
                    </div>
                    <div className="leasson-items-duration">1.5 hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="courses-card-group">
                <div className="courses-card course-content-card mentor-tips">
                  <div className="course-content-card-title">
                    <img src={Ai_Icon} alt="" />
                    <span>AI Mentor Tips</span>
                  </div>
                  <div className="mentor-tips-dsc">
                    Based on your progress, consider focusing on:
                  </div>
                  <div className="mentor-tips-list">
                    <div className="mentor-tips-list-items">
                      <div>
                        <img src={LampIcon} alt="" />
                      </div>
                      <div className="mentor-tips-dsc">
                        Review the complex numbers chapter before moving to
                        advanced applications
                      </div>
                    </div>
                    <div className="mentor-tips-list-items">
                      <div>
                        <img src={GraphIcon} alt="" />
                      </div>
                      <div className="mentor-tips-dsc">
                        You're making great progress! Keep up the momentum
                      </div>
                    </div>
                  </div>
                </div>
                <div className="courses-card course-content-card quick-status">
                  <div className="course-content-card-title">
                    <span>Quick Stats</span>
                  </div>

                  <div className="quick-status-list">
                    <div className="quick-status-list-items">
                      <div className="quick-status-items-label">
                        Study Streak
                      </div>
                      <div className="quick-status-items-value status-yellow">
                        <img src={FireIcon} alt="" /> <span>5 days</span>
                      </div>
                    </div>
                    <div className="quick-status-list-items">
                      <div className="quick-status-items-label">Time Spent</div>
                      <div className="quick-status-items-value status-blue">
                        <img src={BlueWatchIcon} alt="" />{" "}
                        <span>12.5 hours</span>
                      </div>
                    </div>
                    <div className="quick-status-list-items">
                      <div className="quick-status-items-label">
                        Practice Score
                      </div>
                      <div className="quick-status-items-value status-green">
                        <img src={NetworkIcon} alt="" /> <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Ongoing Exercise card */}

          {/* for for Ongoing Exercise Learn Leasson card */}
          <div className="courses-card d-none">
            <div className="courses-card-head">
              <div className="time-duration-label">
                <span>
                  {" "}
                  <img src={WatchIcon} alt="" /> 05 minutes{" "}
                </span>
                <span>
                  {" "}
                  <img src={StarIcon} style={{ width: "16px" }} alt="" />{" "}
                  Beginner{" "}
                </span>
              </div>
            </div>
            <div className="courses-card-body mt-4 learn-leasson-body">
              <p className="courses-card-dsc">
                Algebra is a fundamental branch of mathematics that introduces
                the concept of using letters and symbols to represent numbers
                and quantities. These symbols, called variables, allow us to
                express mathematical relationships and solve problems in a more
                general and powerful way than arithmetic alone.
              </p>
              <p className="courses-card-dsc">
                At its core, algebra deals with mathematical expressions and
                equations. An expression is a combination of variables, numbers,
                and mathematical operations (like addition, subtraction,
                multiplication, and division). For example, 2x + 3 is an
                algebraic expression where 'x' is a variable that can represent
                any number. An equation, on the other hand, shows that two
                expressions are equal, such as 2x + 3 = 11.
              </p>
              <p className="courses-card-dsc">
                At its core, algebra deals with mathematical expressions and
                equations. An expression is a combination of variables, numbers,
                and mathematical operations (like addition, subtraction,
                multiplication, and division). For example, 2x + 3 is an
                algebraic expression where 'x' is a variable that can represent
                any number. An equation, on the other hand, shows that two
                expressions are equal, such as 2x + 3 = 11.
              </p>

              <div className="coreses-card-action learn-leasson-action">
                <LightButton>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2582_56052)">
                      <path
                        d="M0.293945 7.79414C-0.0966797 8.18477 -0.0966797 8.81914 0.293945 9.20977L5.29395 14.2098C5.68457 14.6004 6.31895 14.6004 6.70957 14.2098C7.1002 13.8191 7.1002 13.1848 6.70957 12.7941L3.4127 9.50039H13.0002C13.5533 9.50039 14.0002 9.05352 14.0002 8.50039C14.0002 7.94727 13.5533 7.50039 13.0002 7.50039H3.41582L6.70645 4.20664C7.09707 3.81602 7.09707 3.18164 6.70645 2.79102C6.31582 2.40039 5.68145 2.40039 5.29082 2.79102L0.29082 7.79102L0.293945 7.79414Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2582_56052">
                        <path d="M0 0.5H14V16.5H0V0.5Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Previous Lesson
                </LightButton>
                <PrimaryButton>
                  Give Test{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                  >
                    <path
                      d="M13.7063 7.20664C14.0969 6.81602 14.0969 6.18164 13.7063 5.79102L8.70625 0.791016C8.31563 0.400391 7.68125 0.400391 7.29063 0.791016C6.9 1.18164 6.9 1.81602 7.29063 2.20664L10.5875 5.50039H1C0.446875 5.50039 0 5.94727 0 6.50039C0 7.05352 0.446875 7.50039 1 7.50039H10.5844L7.29375 10.7941C6.90312 11.1848 6.90312 11.8191 7.29375 12.2098C7.68437 12.6004 8.31875 12.6004 8.70938 12.2098L13.7094 7.20977L13.7063 7.20664Z"
                      fill="white"
                    />
                  </svg>
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Review and Answer card  */}
          <div className="courses-card review-answer-card">
            <div className="question-answer-block">
              <div className="stepper-form-block">
                <FormControl>
                  <FormLabel className="stepper-question" id="question-label-1">
                    1. Solve for x: 2x + 5 = 15
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="question-label-1"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      disabled
                      value="2"
                      control={<Radio />}
                      label="2"
                    />
                    <FormControlLabel
                      className="selected-answer"
                      disabled
                      value="5"
                      control={
                        <div className="selected-icon">
                          <img src={SelectRightIcon} alt="Select Right Icon" />
                        </div>
                      }
                      label="5"
                    />
                    <FormControlLabel
                      disabled
                      value="10"
                      control={<Radio />}
                      label="10"
                    />
                    <FormControlLabel
                      disabled
                      value="7"
                      control={<Radio />}
                      label="7"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="question-answer-dsc-block">
                <div className="question-answer-dsc-title">
                  Why this is correct?
                </div>
                <div className="answer-dsc">
                  Algebra is a fundamental branch of mathematics that introduces
                  the concept of using letters and symbols to represent numbers
                  and quantities. These symbols, called variables, allow us to
                  express mathematical relationships and solve problems in a
                  more general and powerful way than arithmetic alone.
                </div>
              </div>
              <div className="stepper-form-block">
                <FormControl>
                  <FormLabel className="stepper-question" id="question-label-1">
                    2. What is the function of the mitochondria in a cell?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="question-label-1"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      disabled
                      value="It stores genetic material"
                      control={<Radio />}
                      label="It stores genetic material"
                    />
                    <FormControlLabel
                      className="wrong-answer"
                      disabled
                      value="5"
                      control={
                        <div className="selected-icon">
                          <img src={CloseIcon} alt="close Icon" />
                        </div>
                      }
                      label="It produces energy"
                    />
                    <FormControlLabel
                      disabled
                      value="10"
                      control={<Radio />}
                      label="It transports proteins"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="question-answer-dsc-block">
                <div className="question-answer-dsc-title">
                  Correct answer and Why?
                </div>
                <div className="answer-dsc">
                  Algebra is a fundamental branch of mathematics that introduces
                  the concept of using letters and symbols to represent numbers
                  and quantities. These symbols, called variables, allow us to
                  express mathematical relationships and solve problems in a
                  more general and powerful way than arithmetic alone. <br />-
                  It produces energy.
                </div>
              </div>
              <div className="stepper-form-block">
                <FormControl>
                  <FormLabel className="stepper-question" id="question-label-1">
                    3. Which sentence is correct?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="question-label-1"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      disabled
                      value="It stores genetic material"
                      control={<Radio />}
                      label="The team is playing their best."
                    />
                    <FormControlLabel
                      className="selected-answer"
                      disabled
                      value="5"
                      control={
                        <div className="selected-icon">
                          <img src={SelectRightIcon} alt="select Icon" />
                        </div>
                      }
                      label="The team is playing it’s best."
                    />
                    <FormControlLabel
                      disabled
                      value="10"
                      control={<Radio />}
                      label="The team is playing its best."
                    />
                    <FormControlLabel
                      disabled
                      value="10"
                      control={<Radio />}
                      label="The team are playing its best."
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="question-answer-dsc-block">
                <div className="question-answer-dsc-title">
                  Why this is correct?
                </div>
                <div className="answer-dsc">
                  Algebra is a fundamental branch of mathematics that introduces
                  the concept of using letters and symbols to represent numbers
                  and quantities. These symbols, called variables, allow us to
                  express mathematical relationships and solve problems in a
                  more general and powerful way than arithmetic alone.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
