import React from "react";
import "../CourseDetailsDilaog/CourseDetailsDilaog.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import CourseImg from "../../assets/images/banner/course-img.svg";
import TimeIcon from "../../assets/images/vactor/sm-time.svg";
import UserIcon from "../../assets/images/vactor/sm-user.svg";
import NetworkIcon from "../../assets/images/vactor/network.svg";
import BookIcon from "../../assets/images/vactor/books-icon.svg";
import RightArrow from "../../assets/images/vactor/blue-right-arrow.svg";
import { LightButton, PrimaryButton } from "../AllButtons/AllButtons";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Link } from "react-router-dom";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<img src={RightArrow} alt="right arrow" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CourseDetailsDilaog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Button
        variant="outlined"
        sx={{ marginTop: "20px" }}
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button>
      <Dialog
        className="course-details-dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="course-details-content">
          <div className="course-details-content-top">
            <div className="course-content-img">
              <img src={CourseImg} alt="" />
            </div>
            <div className="details-content-top">
              <h4 className="card-title">Algebra Fundamentals</h4>
              <p className="card-subtitle">
                Master complex algebraic concepts through interactive lessons
                and real-world applications. Perfect for high school and college
                students.
              </p>
              <div className="course-duration-block">
                <div className="course-weeks">
                  <img src={TimeIcon} alt="" /> 12 weeks
                </div>
                <div className="course-hrs-weeks">
                  <img src={NetworkIcon} alt="" />
                  Intermediate
                </div>
                <div className="course-hrs-weeks">
                  <img src={UserIcon} alt="" />
                  2.5k enrolled
                </div>
              </div>
            </div>
          </div>

          <div className="course-details-conetnt-body">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div className="header-conetnt">
                  <div className="header-conetnt-text">
                    1. Understanding Algebra Basics
                  </div>
                  <div className="header-conetnt-time">4 lessons • 45 min</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordian-panel-body">
                  <div className="panel-content-list">
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Introduction to Variables</span>
                      </div>
                      <div className="times-text">12 min</div>
                    </Link>
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Basic Operations with Variables</span>
                      </div>
                      <div className="times-text">15 min</div>
                    </Link>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <div className="header-conetnt">
                  <div className="header-conetnt-text">2. Linear Equations</div>
                  <div className="header-conetnt-time">2 lessons • 10 min</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordian-panel-body">
                  <div className="panel-content-list">
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Introduction to Variables</span>
                      </div>
                      <div className="times-text">12 min</div>
                    </Link>
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Basic Operations with Variables</span>
                      </div>
                      <div className="times-text">15 min</div>
                    </Link>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <div className="header-conetnt">
                  <div className="header-conetnt-text">
                    3. Quadratic Equations
                  </div>
                  <div className="header-conetnt-time">6 lessons • 24 min</div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="accordian-panel-body">
                  <div className="panel-content-list">
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Introduction to Variables</span>
                      </div>
                      <div className="times-text">11 min</div>
                    </Link>
                    <Link to="" className="panel-content-items">
                      <div className="content-items-text">
                        <img src={BookIcon} alt="" />{" "}
                        <span>Basic Operations with Variables</span>
                      </div>
                      <div className="times-text">10 min</div>
                    </Link>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </DialogContent>
        <DialogActions className="course-details-footer">
          <LightButton onClick={handleClose}> Close </LightButton>
          <PrimaryButton>
            Start Learning{" "}
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
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseDetailsDilaog;
