import React from "react";
import "../TopHeader/TopHeader.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/logo/header-logo.svg";
import NotificationIcon from "../../assets/images/vactor/notification-ball.svg";
import LoginProfile from "../../assets/images/vactor/Avatar1.svg";
import FillDownArrow from "../../assets/images/vactor/fill-down-arrow.svg";
import UserIcon from "../../assets/images/vactor/user-icon.svg";
import Compass from "../../assets/images/vactor/compass.svg";
import Setting from "../../assets/images/vactor/setting.svg";
import { Button, Divider, Menu, MenuItem } from "@mui/material";

const TopHeader = () => {
  const [notify, setNotify] = React.useState<null | HTMLElement>(null);
  const openNotify = Boolean(notify); // Renamed the variable here
  const handleClickNotify = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotify(event.currentTarget);
  };
  const handleCloseNotify = () => {
    setNotify(null);
  };

  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menu);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  return (
    <>
      <header className="top-header-section sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={HeaderLogo} alt="HeaderLogo" />
            </Link>
              <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link
      </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div></div>
              <div className="top-right-menu">
                <Button
                  className="notification-badge"
                  id="notify-menu"
                  aria-controls={openNotify ? "notify-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNotify ? "true" : undefined}
                  onClick={handleClickNotify}
                >
                  <div className="status-badge"></div>
                  <img src={NotificationIcon} alt="NotificationIcon" />
                </Button>
                <Menu
                  className=" notify-dropdown"
                  id="notify-menu"
                  anchorEl={notify}
                  open={openNotify}
                  onClose={handleCloseNotify}
                  MenuListProps={{
                    "aria-labelledby": "notify-menu",
                  }}
                >
                  <div className="notify-head">
                    <h4 className="notify-head-title">Notifications</h4>
                    <Link className="mark-read" to="">
                      Mark all as read
                    </Link>
                  </div>
                  <MenuItem
                    className="notify-items recent-item"
                    onClick={handleCloseNotify}
                  >
                    <p className="notify-items-text">
                      Your new leaning exercise was ready to start.
                    </p>
                    <p className="notify-items-time">2 min ago</p>
                  </MenuItem>
                  <MenuItem
                    className="notify-items recent-item"
                    onClick={handleCloseNotify}
                  >
                    <p className="notify-items-text">
                      Your daily learning steak will about to end start learning
                      to maintain.
                    </p>
                    <p className="notify-items-time">10 min ago</p>
                  </MenuItem>
                  <MenuItem
                    className="notify-items recent-item"
                    onClick={handleCloseNotify}
                  >
                    <p className="notify-items-text">
                      New login detected from another device.
                    </p>
                    <p className="notify-items-time">1 hr ago</p>
                  </MenuItem>
                
                  <MenuItem
                    className="notify-items"
                    onClick={handleCloseNotify}
                  >
                    <p className="notify-items-text">
                      Your new leaning exercise was ready to start.
                    </p>
                    <p className="notify-items-time">2 min ago</p>
                  </MenuItem>
                  <div className="notify-footer">
                    <Link to="">
                      View All Notifications{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                      >
                        <path
                          d="M4.00004 3.2034L6.97004 0.233398L7.81844 1.0818L4.00004 4.9002L0.181641 1.0818L1.03004 0.233398L4.00004 3.2034Z"
                          fill="#4F46E5"
                        />
                      </svg>
                    </Link>
                  </div>
                </Menu>

                <Button
                  className="login-user-profile"
                  id="setting-menu"
                  aria-controls={open ? "setting-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <div className="user-profile">
                    <img src={LoginProfile} alt="" />
                  </div>
                  <span className="login-user-name">Clifton Treutel</span>
                  <img src={FillDownArrow} alt="FillDownArrow" />
                </Button>
                <Menu
                  className="user-setting-dropdown"
                  id="setting-menu"
                  anchorEl={menu}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "setting-menu",
                  }}
                >
                  <div className="user-setting-head">
                    <div className="user-setting-img">
                      <img src={LoginProfile} alt="" />
                    </div>
                    <div className="user-setting-content">
                      <div className="user-name">Clifton Treutel</div>
                      <div className="user-email">
                        sarah.anderson@example.com
                      </div>
                    </div>
                  </div>
                  <MenuItem onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4 17.5C4 15.9087 4.63214 14.3826 5.75736 13.2574C6.88258 12.1321 8.4087 11.5 10 11.5C11.5913 11.5 13.1174 12.1321 14.2426 13.2574C15.3679 14.3826 16 15.9087 16 17.5H14.5C14.5 16.3065 14.0259 15.1619 13.182 14.318C12.3381 13.4741 11.1935 13 10 13C8.80653 13 7.66193 13.4741 6.81802 14.318C5.97411 15.1619 5.5 16.3065 5.5 17.5H4ZM10 10.75C7.51375 10.75 5.5 8.73625 5.5 6.25C5.5 3.76375 7.51375 1.75 10 1.75C12.4862 1.75 14.5 3.76375 14.5 6.25C14.5 8.73625 12.4862 10.75 10 10.75ZM10 9.25C11.6575 9.25 13 7.9075 13 6.25C13 4.5925 11.6575 3.25 10 3.25C8.3425 3.25 7 4.5925 7 6.25C7 7.9075 8.3425 9.25 10 9.25Z"
                        fill="#868C98"
                      />
                    </svg>{" "}
                    <span>My Profile</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.75 16.75V18.25H9.25V16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H7.75C8.17569 3.2495 8.59659 3.33982 8.98459 3.51494C9.37259 3.69006 9.71877 3.94594 10 4.2655C10.2812 3.94594 10.6274 3.69006 11.0154 3.51494C11.4034 3.33982 11.8243 3.2495 12.25 3.25H16.75C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H10.75ZM16 15.25V4.75H12.25C11.8522 4.75 11.4706 4.90804 11.1893 5.18934C10.908 5.47065 10.75 5.85218 10.75 6.25V15.25H16ZM9.25 15.25V6.25C9.25 5.85218 9.09196 5.47065 8.81066 5.18934C8.52936 4.90804 8.14782 4.75 7.75 4.75H4V15.25H9.25Z"
                        fill="#868C98"
                      />
                    </svg>{" "}
                    <span>My Learning Plan</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        d="M8 0.75L15.125 4.875V13.125L8 17.25L0.875 13.125V4.875L8 0.75ZM8 2.48325L2.375 5.73975V12.2603L8 15.5167L13.625 12.2603V5.73975L8 2.48325ZM8 12C7.20435 12 6.44129 11.6839 5.87868 11.1213C5.31607 10.5587 5 9.79565 5 9C5 8.20435 5.31607 7.44129 5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6C8.79565 6 9.55871 6.31607 10.1213 6.87868C10.6839 7.44129 11 8.20435 11 9C11 9.79565 10.6839 10.5587 10.1213 11.1213C9.55871 11.6839 8.79565 12 8 12ZM8 10.5C8.39782 10.5 8.77936 10.342 9.06066 10.0607C9.34196 9.77936 9.5 9.39782 9.5 9C9.5 8.60218 9.34196 8.22064 9.06066 7.93934C8.77936 7.65804 8.39782 7.5 8 7.5C7.60218 7.5 7.22064 7.65804 6.93934 7.93934C6.65804 8.22064 6.5 8.60218 6.5 9C6.5 9.39782 6.65804 9.77936 6.93934 10.0607C7.22064 10.342 7.60218 10.5 8 10.5Z"
                        fill="#868C98"
                      />
                    </svg>{" "}
                    Change Password
                  </MenuItem>
                  <MenuItem className="active" onClick={handleClose}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2582_68833)">
                        <path
                          d="M7.49992 3.3335C3.81658 3.3335 0.833252 6.31683 0.833252 10.0002C0.833252 13.6835 3.81658 16.6668 7.49992 16.6668C11.1833 16.6668 14.1666 13.6835 14.1666 10.0002C14.1666 6.31683 11.1833 3.3335 7.49992 3.3335ZM7.49992 15.0002C4.74159 15.0002 2.49992 12.7585 2.49992 10.0002C2.49992 7.24183 4.74159 5.00016 7.49992 5.00016C10.2583 5.00016 12.4999 7.24183 12.4999 10.0002C12.4999 12.7585 10.2583 15.0002 7.49992 15.0002ZM9.99992 8.75016H8.33325V12.9168H6.66658V8.75016H4.99992V7.50016H9.99992V8.75016ZM16.8749 3.12516L19.1666 4.16683L16.8749 5.2085L15.8333 7.50016L14.7916 5.2085L12.4999 4.16683L14.7916 3.12516L15.8333 0.833496L16.8749 3.12516ZM16.8749 14.7918L19.1666 15.8335L16.8749 16.8752L15.8333 19.1668L14.7916 16.8752L12.4999 15.8335L14.7916 14.7918L15.8333 12.5002L16.8749 14.7918Z"
                          fill="#868C98"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2582_68833">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Upgrade Plan
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16ZM9.25 12.25H10.75V13.75H9.25V12.25ZM10.75 11.0162V11.5H9.25V10.375C9.25 10.1761 9.32902 9.98532 9.46967 9.84467C9.61032 9.70402 9.80109 9.625 10 9.625C10.2131 9.62499 10.4217 9.56447 10.6017 9.4505C10.7818 9.33652 10.9257 9.17377 11.0168 8.98119C11.108 8.7886 11.1425 8.5741 11.1165 8.36263C11.0905 8.15117 11.005 7.95144 10.8699 7.78668C10.7348 7.62193 10.5557 7.49892 10.3534 7.43198C10.1511 7.36503 9.93403 7.3569 9.72732 7.40853C9.52061 7.46016 9.33281 7.56942 9.18577 7.72361C9.03874 7.8778 8.93851 8.07057 8.89675 8.2795L7.42525 7.98475C7.51647 7.52881 7.72713 7.10528 8.03569 6.75744C8.34425 6.4096 8.73964 6.14994 9.18144 6.00499C9.62325 5.86004 10.0956 5.83501 10.5503 5.93246C11.0049 6.02991 11.4255 6.24634 11.7691 6.55962C12.1127 6.8729 12.3669 7.2718 12.5058 7.71555C12.6447 8.15929 12.6633 8.63196 12.5596 9.08523C12.456 9.5385 12.2338 9.95612 11.9159 10.2954C11.5979 10.6347 11.1956 10.8834 10.75 11.0162Z"
                        fill="#868C98"
                      />
                    </svg>
                    Help Center
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.75 17.5C4.55109 17.5 4.36032 17.421 4.21967 17.2803C4.07902 17.1397 4 16.9489 4 16.75V3.25C4 3.05109 4.07902 2.86032 4.21967 2.71967C4.36032 2.57902 4.55109 2.5 4.75 2.5H15.25C15.4489 2.5 15.6397 2.57902 15.7803 2.71967C15.921 2.86032 16 3.05109 16 3.25V5.5H14.5V4H5.5V16H14.5V14.5H16V16.75C16 16.9489 15.921 17.1397 15.7803 17.2803C15.6397 17.421 15.4489 17.5 15.25 17.5H4.75ZM14.5 13V10.75H9.25V9.25H14.5V7L18.25 10L14.5 13Z"
                        fill="#868C98"
                      />
                    </svg>
                    Sign Out
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TopHeader;
