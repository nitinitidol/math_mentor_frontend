import React from 'react';
import "../Dashboard/Dashboard.scss";
import TopHeader from '../../components/TopHeader/TopHeader'
import Sidebar from '../../components/Sidebar/Sidebar';
import { extendTheme } from '@mui/material/styles';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import ChatBox from '../../components/ChatBox/ChatBox';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-wrapper">
        <TopHeader/>
        <div className="dashboard-main-content-wrap">
            <Sidebar/>
            <div className='chat-content-wrapper'>
                <ChatHistory/>

                <ChatBox/>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Dashboard