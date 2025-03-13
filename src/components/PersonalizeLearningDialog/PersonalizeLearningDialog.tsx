import React from "react";
import "../PersonalizeLearningDialog/PersonalizeLearningDialog.scss";
import GraphIcon from "../../assets/images/vactor/graph-icon.svg";
import BlogImg from "../../assets/images/banner/blog-img1.svg";
import TimeIcon from "../../assets/images/vactor/time-icon.svg";
import {
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";

const PersonalizeLearningDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="personalize-dialog-wrapper">
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="personalize-dialog"
        >
          <DialogContent>
            <div className="personalize-dialog-body">
              <div className="personalize-icon">
                <img src={GraphIcon} alt="" />
              </div>
              <div className="personalize-dialog-title">
                One Final Step to Personalize Your Learning!
              </div>
              <div className="personalize-dialog-dsc">
                To keep learning with YULI, please take a quick test for even
                more accurate recommendations.
              </div>
              <div className="personalize-blog-img">
                <img src={BlogImg} alt="" />
              </div>
              <div className="personalize-action-btn">
                <PrimaryButton>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                  >
                    <path
                      d="M2.28125 0.718599C1.81875 0.434224 1.2375 0.424849 0.765625 0.690474C0.29375 0.956099 0 1.4561 0 1.99985V12.9998C0 13.5436 0.29375 14.0436 0.765625 14.3092C1.2375 14.5748 1.81875 14.5623 2.28125 14.2811L11.2812 8.7811C11.7281 8.50922 12 8.02485 12 7.49985C12 6.97485 11.7281 6.4936 11.2812 6.2186L2.28125 0.718599Z"
                      fill="white"
                    />
                  </svg>{" "}
                  Start Test
                </PrimaryButton>
                <LightButton> Maybe Later </LightButton>
              </div>

              <div className="time-note"> <img src={TimeIcon} alt="" />  Takes about 15 minutes to complete</div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PersonalizeLearningDialog;
