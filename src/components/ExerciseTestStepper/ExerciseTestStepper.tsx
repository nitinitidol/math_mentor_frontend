import React, { useState } from "react";
import "../ExerciseTestStepper/ExerciseTestStepper.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/header-logo.svg";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";
import CongratulationsDialog from "../CongratulationsDialog/CongratulationsDialog";

const ExerciseTestStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const updateProgressBar = () => {
    const progressPercentage = ((currentStep - 1) / 2) * 100;
    document
      .querySelector(".progress-bar")!
      .setAttribute("style", `width: ${progressPercentage}%`);
  };

  const displayStep = (stepNumber: number) => {
    if (stepNumber >= 1 && stepNumber <= 3) {
      setCurrentStep(stepNumber);
      updateProgressBar();
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      updateProgressBar();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      updateProgressBar();
    }
  };

  return (
    <>
    <div className="exercise-test-section">
      <div className="test-stepper-wrapper">
        <div className="test-stepper-header">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <Button className="back-btn">Do it Later</Button>
          <div className="timer-count d-none">04:59</div>
        </div>

        <div className="test-stepper-content-body">
          <div className="test-stepper-container" id="container">
            <div className="progress-label">
              <span>Question 1 of 10</span>
              <span>10%</span>
            </div>
            <div className="progress px-1" style={{ height: "8px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                aria-valuenow={currentStep}
                aria-valuemin={1}
                aria-valuemax={3}
              ></div>
            </div>

            <form id="multi-step-form">
              <div
                className={`step step-1 ${
                  currentStep === 1 ? "d-block" : "d-none"
                }`}
              >
                <div className="mb-3">
                  <div className="stepper-form-block">
                    <FormControl>
                      <FormLabel
                        className="stepper-question"
                        id="question-label-1"
                      >
                        1. Solve for x: 2x + 5 = 15
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="question-label-1"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="2"
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label="5"
                        />
                        <FormControlLabel
                          value="10"
                          control={<Radio />}
                          label="10"
                        />
                        <FormControlLabel
                          value="7"
                          control={<Radio />}
                          label="7"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="stepper-form-action">
                  <LightButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2582_54166)">
                        <path
                          d="M0.292969 7.29365C-0.0976562 7.68428 -0.0976562 8.31865 0.292969 8.70928L5.29297 13.7093C5.68359 14.0999 6.31797 14.0999 6.70859 13.7093C7.09922 13.3187 7.09922 12.6843 6.70859 12.2937L3.41172 8.9999H12.9992C13.5523 8.9999 13.9992 8.55303 13.9992 7.9999C13.9992 7.44678 13.5523 6.9999 12.9992 6.9999H3.41484L6.70547 3.70615C7.09609 3.31553 7.09609 2.68115 6.70547 2.29053C6.31484 1.8999 5.68047 1.8999 5.28984 2.29053L0.289844 7.29053L0.292969 7.29365Z"
                          fill="#4B5563"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_54166">
                          <path d="M0 0H14V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Previous
                  </LightButton>
                  <PrimaryButton onClick={nextStep}>
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M13.7063 6.70615C14.0969 6.31553 14.0969 5.68115 13.7063 5.29053L8.70625 0.290527C8.31563 -0.100098 7.68125 -0.100098 7.29063 0.290527C6.9 0.681152 6.9 1.31553 7.29063 1.70615L10.5875 4.9999H1C0.446875 4.9999 0 5.44678 0 5.9999C0 6.55303 0.446875 6.9999 1 6.9999H10.5844L7.29375 10.2937C6.90312 10.6843 6.90312 11.3187 7.29375 11.7093C7.68437 12.0999 8.31875 12.0999 8.70938 11.7093L13.7094 6.70928L13.7063 6.70615Z"
                        fill="white"
                      />
                    </svg>
                  </PrimaryButton>
                </div>
              </div>

              <div
                className={`step step-2 ${
                  currentStep === 2 ? "d-block" : "d-none"
                }`}
              >
                <div className="mb-3">
                  <div className="stepper-form-block">
                    <FormControl>
                      <FormLabel
                        className="stepper-question"
                        id="question-label-1"
                      >
                        2. What is the function of the mitochondria in a cell?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="question-label-1"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="It stores genetic material"
                          control={<Radio />}
                          label="It stores genetic material"
                        />
                        <FormControlLabel
                          value="It produces energy"
                          control={<Radio />}
                          label="It produces energy"
                        />
                        <FormControlLabel
                          value="It controls the cell’s activities"
                          control={<Radio />}
                          label="It controls the cell’s activities"
                        />
                        <FormControlLabel
                          value="It transports proteins"
                          control={<Radio />}
                          label="It transports proteins"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="stepper-form-action">
                  <LightButton onClick={prevStep}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2582_54166)">
                        <path
                          d="M0.292969 7.29365C-0.0976562 7.68428 -0.0976562 8.31865 0.292969 8.70928L5.29297 13.7093C5.68359 14.0999 6.31797 14.0999 6.70859 13.7093C7.09922 13.3187 7.09922 12.6843 6.70859 12.2937L3.41172 8.9999H12.9992C13.5523 8.9999 13.9992 8.55303 13.9992 7.9999C13.9992 7.44678 13.5523 6.9999 12.9992 6.9999H3.41484L6.70547 3.70615C7.09609 3.31553 7.09609 2.68115 6.70547 2.29053C6.31484 1.8999 5.68047 1.8999 5.28984 2.29053L0.289844 7.29053L0.292969 7.29365Z"
                          fill="#4B5563"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_54166">
                          <path d="M0 0H14V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Previous
                  </LightButton>
                  <PrimaryButton onClick={nextStep}>
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M13.7063 6.70615C14.0969 6.31553 14.0969 5.68115 13.7063 5.29053L8.70625 0.290527C8.31563 -0.100098 7.68125 -0.100098 7.29063 0.290527C6.9 0.681152 6.9 1.31553 7.29063 1.70615L10.5875 4.9999H1C0.446875 4.9999 0 5.44678 0 5.9999C0 6.55303 0.446875 6.9999 1 6.9999H10.5844L7.29375 10.2937C6.90312 10.6843 6.90312 11.3187 7.29375 11.7093C7.68437 12.0999 8.31875 12.0999 8.70938 11.7093L13.7094 6.70928L13.7063 6.70615Z"
                        fill="white"
                      />
                    </svg>
                  </PrimaryButton>
                </div>
              </div>

              <div
                className={`step step-3 ${
                  currentStep === 3 ? "d-block" : "d-none"
                }`}
              >
                <div className="mb-3">
                  <div className="stepper-form-block">
                    <FormControl>
                      <FormLabel
                        className="stepper-question"
                        id="question-label-1"
                      >
                        3. Which sentence is correct?
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="question-label-3"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="The team is playing their best."
                          control={<Radio />}
                          label="The team is playing their best."
                        />
                        <FormControlLabel
                          value="The team is playing it’s best."
                          control={<Radio />}
                          label="The team is playing it’s best."
                        />
                        <FormControlLabel
                          value="The team is playing its best."
                          control={<Radio />}
                          label="The team is playing its best."
                        />
                        <FormControlLabel
                          value="The team are playing its best."
                          control={<Radio />}
                          label="The team are playing its best."
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="stepper-form-action">
                  <LightButton onClick={prevStep}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2582_54166)">
                        <path
                          d="M0.292969 7.29365C-0.0976562 7.68428 -0.0976562 8.31865 0.292969 8.70928L5.29297 13.7093C5.68359 14.0999 6.31797 14.0999 6.70859 13.7093C7.09922 13.3187 7.09922 12.6843 6.70859 12.2937L3.41172 8.9999H12.9992C13.5523 8.9999 13.9992 8.55303 13.9992 7.9999C13.9992 7.44678 13.5523 6.9999 12.9992 6.9999H3.41484L6.70547 3.70615C7.09609 3.31553 7.09609 2.68115 6.70547 2.29053C6.31484 1.8999 5.68047 1.8999 5.28984 2.29053L0.289844 7.29053L0.292969 7.29365Z"
                          fill="#4B5563"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_54166">
                          <path d="M0 0H14V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Previous
                  </LightButton>
                  <PrimaryButton type="submit">
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                    >
                      <path
                        d="M13.7063 6.70615C14.0969 6.31553 14.0969 5.68115 13.7063 5.29053L8.70625 0.290527C8.31563 -0.100098 7.68125 -0.100098 7.29063 0.290527C6.9 0.681152 6.9 1.31553 7.29063 1.70615L10.5875 4.9999H1C0.446875 4.9999 0 5.44678 0 5.9999C0 6.55303 0.446875 6.9999 1 6.9999H10.5844L7.29375 10.2937C6.90312 10.6843 6.90312 11.3187 7.29375 11.7093C7.68437 12.0999 8.31875 12.0999 8.70938 11.7093L13.7094 6.70928L13.7063 6.70615Z"
                        fill="white"
                      />
                    </svg>
                  </PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <CongratulationsDialog/>
    </>
  );
};

export default ExerciseTestStepper;
