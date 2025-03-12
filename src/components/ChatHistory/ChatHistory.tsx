import React from "react";
import "../ChatHistory/ChatHistory.scss";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import DotsMenu from "../../assets/images/vactor/dot-menu.svg";
import { PrimaryButton } from "../AllButtons/AllButtons";

const ChatHistory = () => {
  const [moreMenu, setMoreMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(moreMenu);
  const handleClickMoreMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMoreMenu(event.currentTarget);
  };
  const handleCloseMoreMenu = () => {
    setMoreMenu(null);
  };

  return (
    <>
      <div className="chat-history-wrapper">
        <div className="chat-history-header">
          <Button className="new-chat-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                fill="#4F46E5"
              />
            </svg>
            Start New Chat
          </Button>
        </div>
        <div className="chat-history-list">
          <div className="chat-history-lable">Yesterday</div>
          <div>
            <List className="history-list">
              <ListItem
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      aria-label="menu"
                      id="moremunu-button"
                      aria-controls={open ? "basic-moremenu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClickMoreMenu}
                    >
                      <img src={DotsMenu} alt="" />
                    </IconButton>
                    <Menu
                      className="moremenu-popup"
                      id="basic-moremenu"
                      anchorEl={moreMenu}
                      open={open}
                      onClose={handleCloseMoreMenu}
                      MenuListProps={{
                        "aria-labelledby": "moremunu-button",
                      }}
                    >
                      <MenuItem onClick={handleCloseMoreMenu}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 14 16"
                            fill="none"
                          >
                            <path
                              d="M2.8105 11.0001L10.417 3.39356L9.3565 2.33306L1.75 9.93956V11.0001H2.8105ZM3.43225 12.5001H0.25V9.31781L8.82625 0.741563C8.9669 0.600959 9.15763 0.521973 9.3565 0.521973C9.55537 0.521973 9.7461 0.600959 9.88675 0.741563L12.0085 2.86331C12.1491 3.00396 12.2281 3.19469 12.2281 3.39356C12.2281 3.59244 12.1491 3.78317 12.0085 3.92381L3.43225 12.5001ZM0.25 14.0001H13.75V15.5001H0.25V14.0001Z"
                              fill="#525866"
                            />
                          </svg>
                        </span>
                        <span className="moremenu-text">Rename</span>
                      </MenuItem>
                      <MenuItem onClick={handleCloseMoreMenu}>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.75 5.5H17.5V7H16V16.75C16 16.9489 15.921 17.1397 15.7803 17.2803C15.6397 17.421 15.4489 17.5 15.25 17.5H4.75C4.55109 17.5 4.36032 17.421 4.21967 17.2803C4.07902 17.1397 4 16.9489 4 16.75V7H2.5V5.5H6.25V3.25C6.25 3.05109 6.32902 2.86032 6.46967 2.71967C6.61032 2.57902 6.80109 2.5 7 2.5H13C13.1989 2.5 13.3897 2.57902 13.5303 2.71967C13.671 2.86032 13.75 3.05109 13.75 3.25V5.5ZM14.5 7H5.5V16H14.5V7ZM7.75 9.25H9.25V13.75H7.75V9.25ZM10.75 9.25H12.25V13.75H10.75V9.25ZM7.75 4V5.5H12.25V4H7.75Z" fill="#DF1C41"/>
</svg>
                        </span>
                        <span className="moremenu-text delete-menu">Delete</span>
                      </MenuItem>
                    </Menu>
                  </>
                }
              >
                <ListItemButton>
                  <ListItemText primary="Math" />
                </ListItemButton>
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="Science" />
                </ListItemButton>
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="History" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <div className="chat-history-lable">Last week</div>
          <div>
            <List className="history-list">
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="Reasoning" />
                </ListItemButton>
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="Calculation" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <div className="chat-history-lable">Last Month</div>
          <div>
            <List className="history-list">
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="English Grammar" />
                </ListItemButton>
              </ListItem>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemText primary="Biology" />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
        <div className="chat-history-footer">
          <div className="token-upgread-block">
            <div className="token-badge">
              <div className="token-badge-label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.50004 3.3335C3.81671 3.3335 0.833374 6.31683 0.833374 10.0002C0.833374 13.6835 3.81671 16.6668 7.50004 16.6668C11.1834 16.6668 14.1667 13.6835 14.1667 10.0002C14.1667 6.31683 11.1834 3.3335 7.50004 3.3335ZM7.50004 15.0002C4.74171 15.0002 2.50004 12.7585 2.50004 10.0002C2.50004 7.24183 4.74171 5.00016 7.50004 5.00016C10.2584 5.00016 12.5 7.24183 12.5 10.0002C12.5 12.7585 10.2584 15.0002 7.50004 15.0002ZM10 8.75016H8.33337V12.9168H6.66671V8.75016H5.00004V7.50016H10V8.75016ZM16.875 3.12516L19.1667 4.16683L16.875 5.2085L15.8334 7.50016L14.7917 5.2085L12.5 4.16683L14.7917 3.12516L15.8334 0.833496L16.875 3.12516ZM16.875 14.7918L19.1667 15.8335L16.875 16.8752L15.8334 19.1668L14.7917 16.8752L12.5 15.8335L14.7917 14.7918L15.8334 12.5002L16.875 14.7918Z"
                    fill="#4F46E5"
                  />
                </svg>

                <span>Tokens</span>
              </div>
              <div className="token-badge-value">0/100</div>
            </div>

            <PrimaryButton>Upgrade to get more</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHistory;
