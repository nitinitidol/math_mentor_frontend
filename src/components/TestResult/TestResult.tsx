import React from "react";
import "../TestResult/TestResult.scss";
import TrophyIcon from "../../assets/images/vactor/trophy.svg";
import GraphIcon from "../../assets/images/vactor/graph.svg";
import Quadratic from "../../assets/images/vactor/quadratic.svg";
import Proficient from "../../assets/images/vactor/proficient.svg";
import { LightButton } from "../AllButtons/AllButtons";

const TestResult = () => {
  return (
    <>
      <div className="test-result-wrapper">
        <div className="test-result-header">
          <div className="test-result-header-title">Test Results</div>
          <div className="test-result-header-subtitle">
            Algebra Fundamentals - Chapter 3
          </div>
        </div>

        <div className="test-result-card-wrapper">
          <div className="row g-4 m-0">
            <div className="col-md-8 d-flex flex-column g-32">
              <div className="result-card">
                <div className="progress-header">
                  <div>
                    <div className="card-title">Great Progress!</div>
                    <div className="card-subtitle">
                      You're on the right track to mastering algebra.
                    </div>
                  </div>

                  <div className="progress-icon">
                    <img src={TrophyIcon} alt="TrophyIcon" />
                  </div>
                </div>

                <div className="correct-ans-block">
                  <div className="correct-ans-number">7/10</div>
                  <div className="card-subtitle">
                    Questions Answered Correctly
                  </div>
                </div>
              </div>

              <div className="result-card">
                <div className="card-title">
                  Personalized Learning Suggestions
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="suggestion-card">
                      <img src={GraphIcon} alt="" />
                      <div className="card-title">
                        Personalized Learning Suggestions
                      </div>
                      <div className="card-subtitle">
                        Focus on solving complex equations with multiple
                        variables
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="suggestion-card">
                      <img src={Quadratic} alt="" />
                      <div className="card-title">Quadratic Functions</div>
                      <div className="card-subtitle">
                        Practice identifying and solving quadratic equations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column g-32">
              <div className="result-card">
                <div className="view-result-block">
                  <div className="card-title">All test results</div>
                  <LightButton className="view-now-btn">View Now</LightButton>
                </div>
              </div>

              <div className="result-card">
                <div className="skill-level-block">
                  <div className="proficient-icon">
                    <img src={Proficient} alt="" />
                  </div>
                  <div className="card-title">Skill Level</div>
                  <div className="proficient-text">Proficient</div>
                  <div className="card-subtitle">On Track</div>
                </div>
              </div>

              <div className="learning-continue">
                <div className="learning-continue-title">
                  Ready to Continue?
                </div>
                <div className="learning-continue-subtitle">
                  The personalized solution has been prepared
                </div>
                <LightButton className="start-btn">Start Learning</LightButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestResult;
