import React from 'react';
import "../Dashboard/Dashboard.scss";
import TopHeader from '../../components/TopHeader/TopHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-wrapper">
        <TopHeader/>
        <div className="dashboard-main-content-wrap">
            <Sidebar/>
            <div>
                <h1>Chat box</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard