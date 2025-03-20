import React from "react";
import "../EnrolledCourses/EnrolledCourses.scss";
import BackArrow from "../../assets/images/vactor/back-arrow.svg";
import TagIcon from "../../assets/images/vactor/tag-icon.svg";
import BookIcon from "../../assets/images/vactor/sm-balck-book.svg";
import WatchIcon from "../../assets/images/vactor/sm-watch.svg";
import StarIcon from "../../assets/images/vactor/line-star-icon.svg";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

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

            {/* for Learn Leasson card */}
          <div className="courses-card">
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
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;
