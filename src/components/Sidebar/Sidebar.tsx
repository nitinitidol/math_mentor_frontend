import React from "react";
import "../Sidebar/Sidebar.scss";
import HeaderLogo from "../../assets/images/logo/header-logo.svg";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <div
          className="offcanvas offcanvas-start show"
          tabIndex={-1}
          data-bs-backdrop="false"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/">
              <img src={HeaderLogo} alt="HeaderLogo" />
            </Link>
            {/* <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button> */}
          </div>
          <div className="offcanvas-body">
            <div className="sidebar-menu">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.2 3.8999H13.8C15.7096 3.8999 17.5409 4.65847 18.8912 6.00873C20.2414 7.359 21 9.19034 21 11.0999C21 13.0095 20.2414 14.8408 18.8912 16.1911C17.5409 17.5413 15.7096 18.2999 13.8 18.2999V21.4499C9.3 19.6499 3 16.9499 3 11.0999C3 9.19034 3.75857 7.359 5.10883 6.00873C6.45909 4.65847 8.29044 3.8999 10.2 3.8999ZM12 16.4999H13.8C14.5091 16.4999 15.2113 16.3602 15.8665 16.0889C16.5216 15.8175 17.1169 15.4197 17.6184 14.9183C18.1198 14.4168 18.5176 13.8216 18.7889 13.1664C19.0603 12.5112 19.2 11.809 19.2 11.0999C19.2 10.3908 19.0603 9.68857 18.7889 9.03341C18.5176 8.37825 18.1198 7.78296 17.6184 7.28153C17.1169 6.78009 16.5216 6.38233 15.8665 6.11095C15.2113 5.83958 14.5091 5.6999 13.8 5.6999H10.2C8.76783 5.6999 7.39432 6.26883 6.38162 7.28153C5.36893 8.29422 4.8 9.66773 4.8 11.0999C4.8 14.3489 7.0158 16.4693 12 18.7319V16.4999Z"
                          fill="#525866"
                        />
                      </svg>
                    </ListItemIcon>
                    <ListItemText primary="Dashbaord" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9.9 17.0999V8.0999H17.1V17.0999H9.9ZM0.9 9.8999V0.899902H8.1V9.8999H0.9ZM6.3 8.0999V2.6999H2.7V8.0999H6.3ZM0.9 17.0999V11.6999H8.1V17.0999H0.9ZM2.7 15.2999H6.3V13.4999H2.7V15.2999ZM11.7 15.2999H15.3V9.8999H11.7V15.2999ZM9.9 0.899902H17.1V6.2999H9.9V0.899902ZM11.7 2.6999V4.4999H15.3V2.6999H11.7Z"
                          fill="#525866"
                        />
                      </svg>
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.9 20.0999V21.8999H11.1V20.0999H3.9C3.66131 20.0999 3.43239 20.0051 3.2636 19.8363C3.09482 19.6675 3 19.4386 3 19.1999V4.7999C3 4.56121 3.09482 4.33229 3.2636 4.16351C3.43239 3.99473 3.66131 3.8999 3.9 3.8999H9.3C9.81083 3.8993 10.3159 4.00769 10.7815 4.21783C11.2471 4.42797 11.6625 4.73503 12 5.11851C12.3375 4.73503 12.7529 4.42797 13.2185 4.21783C13.6841 4.00769 14.1892 3.8993 14.7 3.8999H20.1C20.3387 3.8999 20.5676 3.99473 20.7364 4.16351C20.9052 4.33229 21 4.56121 21 4.7999V19.1999C21 19.4386 20.9052 19.6675 20.7364 19.8363C20.5676 20.0051 20.3387 20.0999 20.1 20.0999H12.9ZM19.2 18.2999V5.69991H14.7C14.2226 5.69991 13.7648 5.88955 13.4272 6.22711C13.0896 6.56468 12.9 7.02252 12.9 7.49991V18.2999H19.2ZM11.1 18.2999V7.49991C11.1 7.02252 10.9104 6.56468 10.5728 6.22711C10.2352 5.88955 9.77739 5.69991 9.3 5.69991H4.8V18.2999H11.1Z"
                          fill="#525866"
                        />
                      </svg>
                    </ListItemIcon>
                    <ListItemText primary="Learning" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
