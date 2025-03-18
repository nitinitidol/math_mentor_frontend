import React from "react";
import "../CongratulationsDialog/CongratulationsDialog.scss";
import checkIcon from "../../assets/images/vactor/success-check.svg";
import BlogImg from "../../assets/images/banner/blog-img1.svg";
import { Button, Dialog, DialogContent, LinearProgress, linearProgressClasses, Stack, styled } from "@mui/material";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";

const CongratulationsDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <div className="congratulations-dialog-wrapper">
        <Button variant="outlined" onClick={handleClickOpen}>
          Congratulations dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="congratulations-dialog"
        >
          <DialogContent>
            <div className="congratulations-dialog-body">
              <div className="personalize-icon">
                <img src={checkIcon} alt="" />
              </div>
              <div className="personalize-dialog-title">
                Congratulations, Clifton!
              </div>
              <div className="personalize-dialog-dsc">
                Great job! Let's take a look at your performance.
              </div>
              <div className="overall-score-block">
                <div className="overall-score-level">
                  <div className="overall-score">
                    <div className="overall-score-label">Overall Score</div>
                    <div className="overall-score-value">80%</div>
                  </div>
                  <div className="proficiency-level">
                    <div className="proficiency-level-label">
                      Proficiency Level{" "}
                    </div>
                    <div className="proficiency-level-value">Intermediate</div>
                  </div>
                </div>
                <div className="overall-score-level-progress"> 
                  {/* <Stack spacing={2} sx={{ flexGrow: 1 }}> */}
                    <BorderLinearProgress variant="determinate" value={80} />
                  {/* </Stack> */}
                </div>
                <div className="correct-answers">
                    <div className="answers-label">Correct Answers</div>
                    <div className="answers-value">02 out of 03</div>
                </div>
              </div>
              <div className="areas-focus-block">
                    <h4 className="areas-focus-block-title">Areas of Focus</h4>
                    <div className="areas-focus-list">
                    <div className="grammar">Grammar</div>
                    <div className="vocabulary">Vocabulary</div>
                    <div className="reading">Reading</div>
                    </div>
              </div>
              <div className="congratulations-action-btn">
                <PrimaryButton>Continue to Dashboard</PrimaryButton>
                <LightButton> Review Answers </LightButton>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CongratulationsDialog;
