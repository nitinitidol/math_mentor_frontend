import React, { useCallback, useState } from 'react';
import "../Dashboard/Dashboard.scss";
import TopHeader from '../../components/TopHeader/TopHeader'
import Sidebar from '../../components/Sidebar/Sidebar';
import { extendTheme } from '@mui/material/styles';
import ChatHistory from '../../components/ChatHistory/ChatHistory';
import ChatBox from '../../components/ChatBox/ChatBox';
import TestResult from '../../components/TestResult/TestResult';
import CourseList from '../../components/CourseList/CourseList';
import EnrolledCourses from '../../components/EnrolledCourses/EnrolledCourses';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);
  return (
    <>
    <div className="dashboard-wrapper">
        <TopHeader onMenuToggle={toggleMenu}/>
        <div className="dashboard-main-content-wrap">
            <Sidebar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu}/>
            <div className='chat-content-wrapper'>
                {/* <ChatHistory/>
                <ChatBox/> */}

                {/* <TestResult/> */}

                {/* <CourseList/> */}

                <EnrolledCourses/>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Dashboard