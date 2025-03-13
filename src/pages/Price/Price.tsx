import React from "react";
import "../Price/Price.scss";
import TopHeader from "../../components/TopHeader/TopHeader";
import CheckRound from "../../assets/images/vactor/green-check-round.svg";
import { PrimaryButton } from "../../components/AllButtons/AllButtons";
import { Button } from "@mui/material";
import PersonalizeLearningDialog from "../../components/PersonalizeLearningDialog/PersonalizeLearningDialog";
import UpgradeDialog from "../../components/UpgradeDialog/UpgradeDialog";

const Price = () => {
  return (
    <>
      <TopHeader
        onMenuToggle={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="price-wrapper">
        <div className="price-head-content">
          <h4 className="head-content-title">
            Unlock Your Learning Potential!
          </h4>
          <p className="head-content-dsc-text">
            Get personalized AI-driven learning, unlimited practice tests, and
            expert-guided lessons tailored to your learning style.
          </p>
        </div>

        <div className="price-plan-card-wrap">
          <div className="price-plan-card">
            <div className="price-card">
              <h4 className="plan-card-title">Student</h4>
              <p className="plan-card-dsc">Best for dedicated learners</p>
              <div className="plan-cate">
                <span className="plan-cate-value">$10</span>
                <span className="plan-cate-label">/month</span>
              </div>
              <div className="plan-summery-list">
                <div className="summery-list-items">
                  <div className="check-list">
                    <img src={CheckRound} alt="" />
                  </div>
                  <div className="list-items-text">
                    Unlimited access to all courses
                  </div>
                </div>
                <div className="summery-list-items">
                  <div className="check-list">
                    <img src={CheckRound} alt="" />
                  </div>
                  <div className="list-items-text">
                    Personal learning assistant
                  </div>
                </div>
                <div className="summery-list-items">
                  <div className="check-list">
                    <img src={CheckRound} alt="" />
                  </div>
                  <div className="list-items-text">
                    Progress tracking & certificates
                  </div>
                </div>
                <div className="summery-list-items">
                  <div className="check-list">
                    <img src={CheckRound} alt="" />
                  </div>
                  <div className="list-items-text">10,000 practice token</div>
                </div>
              </div>
              <div className="price-plan-card-action">
                <PrimaryButton>Choose Plan</PrimaryButton>

                <Button className="skip-btn">Skip fot now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PersonalizeLearningDialog/>
      <UpgradeDialog/>
    </>
  );
};

export default Price;
