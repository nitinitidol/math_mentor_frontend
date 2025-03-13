import React from 'react';
import "../UpgradeDialog/UpgradeDialog.scss";
import { LightButton, PrimaryButton } from '../AllButtons/AllButtons';
import { Button, Dialog, DialogContent } from '@mui/material';
import LockIcon from "../../assets/images/vactor/lock-icon.svg";
import CheckRound from "../../assets/images/vactor/green-check-round.svg";

const UpgradeDialog = () => {
      const [open, setOpen] = React.useState(false);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
     <div className="upgrade-dialog-wrapper">
        <Button variant="outlined" onClick={handleClickOpen}>
            Upgrade dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="upgrade-dialog"
        >

          <DialogContent>
            <div className="upgrade-dialog-body">
              <div className="upgrade-icon">
                <img src={LockIcon} alt="" />
              </div>
              <div className="upgrade-dialog-title">
              Your free access token has been used!
              </div>
              <div className="upgrade-dialog-dsc">
              To keep learning with YULI, please upgrade your plan now and unlock unlimited access to all features.
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
              <div className="upgrade-action-btn">
                <PrimaryButton>
                  Upgrade Now
                </PrimaryButton>
                <LightButton>Maybe Later </LightButton>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default UpgradeDialog