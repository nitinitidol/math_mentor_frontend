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
} from "@mui/material";
import DotsMenu from "../../assets/images/vactor/dot-menu.svg";

const ChatHistory = () => {
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
                  <IconButton edge="end" aria-label="menu">
                    <img src={DotsMenu} alt="" />
                  </IconButton>
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
        <div className="chat-history-footer"></div>
      </div>
    </>
  );
};

export default ChatHistory;
