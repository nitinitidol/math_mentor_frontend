import React from "react";
import "../ChatBox/ChatBox.scss";
import { PrimaryButton } from "../AllButtons/AllButtons";
import ReceiveChatIcon from "../../assets/images/vactor/receive-chat-icon.svg";
import SendChatUser from "../../assets/images/vactor/Avatar1.svg";
import ChatBotIcon from "../../assets/images/vactor/chat-bot-icon.svg";
import StarIcon from "../../assets/images/vactor/star-icon.svg";
import ImageIcon from "../../assets/images/vactor/image-icon.svg";
import VoiceIcon from "../../assets/images/vactor/voice-icon.svg";
import { Button } from "@mui/material";

const ChatBox = () => {
  return (
    <>
      <div className="chatbox-wrapper">
        <div className="chating-block welcome-chating-block">
          <div className="chating-history-block">
            <div className="chating-history-list ">
              <div className="receive-chat">
                <div className="chat-icon">
                  <img src={ReceiveChatIcon} alt="" />
                </div>
                <div className="receive-chat-text-block">
                  <div className="receive-chat-text">
                    <p>
                      Hello! I'm your YULI. How can I help you today with your
                      mathematics questions?
                    </p>
                  </div>
                  <div className="chating-text-actions">
                    <Button>Get Started</Button>
                    <Button>View Topics</Button>
                  </div>
                </div>
              </div>
              <div className="send-chat">
              <div className="send-chat-text-block">
                <div className="send-chat-text">
                  <p>Can you help me understand quadratic equations?</p>
                </div>
                <div className="chating-text-actions">
                    <Button>Get Started</Button>
                    <Button>View Topics</Button>
                  </div>
              </div>
                <div className="chat-icon">
                  <img src={SendChatUser} alt="" />
                </div>
              </div>
              <div className="receive-chat">
                <div className="chat-icon">
                  <img src={ReceiveChatIcon} alt="" />
                </div>
                <div className="receive-chat-text">
                  <p>
                    Hello! I'm your Math Mentor. How can I help you today with
                    your mathematics questions?
                  </p>
                </div>
              </div>
              <div className="send-chat">
                <div className="send-chat-text">
                  <p>Can you help me understand quadratic equations?</p>
                </div>
                <div className="chat-icon">
                  <img src={SendChatUser} alt="" />
                </div>
              </div>
            </div>
            <div className="welcome-chat-box d-none">
              <div className="welcome-chat-icon">
                <img src={ChatBotIcon} alt="" />
              </div>
              <div className="welcome-text">
                Congratulations, Clifton Treutel!
              </div>
              <div className="welcome-subtext">
                Welcome to YULI! How can we help you today?
              </div>
            </div>
          </div>
          <div className="chat-editor-content-block">
            <div className="chat-editor-block">
              <div className="chat-input-editor">
                <input
                  type="text"
                  name="name"
                  placeholder="Start your learning journeey with YULI..."
                />
              </div>
              <div className="chat-editor-menu">
                <div className="editor-menu-block">
                  <label className="upload-img-btn" htmlFor="ImgBtn">
                    <img src={ImageIcon} alt="" />
                    <input type="file" id="ImgBtn" name="image" hidden />
                  </label>
                  <Button className="voice-btn">
                    <img src={VoiceIcon} alt="" />
                  </Button>
                </div>
                <PrimaryButton className="send-btn">
                  Send{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M15.5657 0.175119C15.8813 0.393869 16.047 0.771994 15.9876 1.15012L13.9876 14.1501C13.9407 14.4532 13.7563 14.7189 13.4876 14.8689C13.2188 15.0189 12.897 15.0376 12.6126 14.9189L8.87508 13.3657L6.73446 15.6814C6.45633 15.9845 6.01883 16.0845 5.63446 15.9345C5.25008 15.7845 5.00008 15.4126 5.00008 15.0001V12.3876C5.00008 12.2626 5.04696 12.1439 5.13133 12.0532L10.3688 6.33762C10.5501 6.14074 10.5438 5.83762 10.3563 5.65012C10.1688 5.46262 9.86571 5.45012 9.66883 5.62824L3.31258 11.2751L0.553206 9.89387C0.221956 9.72824 0.00945635 9.39699 8.13452e-05 9.02824C-0.00929365 8.65949 0.184456 8.31574 0.503206 8.13137L14.5032 0.131369C14.8376 -0.0592555 15.2501 -0.0405055 15.5657 0.175119Z"
                      fill="white"
                    />
                  </svg>{" "}
                </PrimaryButton>
              </div>
            </div>

            <div className="chating-tools-block">
              <div className="suggestion-block">
                <Button className="suggestion-btn">
                  {/* <img src={StarIcon} alt="" /> */}
                  Try Suggestions
                </Button>
              </div>
              <div className="tools-list">
                <Button variant="text">Math</Button>
                <Button variant="text">Physics</Button>
                <Button variant="text">Chemistry</Button>
                <Button variant="text">Biology</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
