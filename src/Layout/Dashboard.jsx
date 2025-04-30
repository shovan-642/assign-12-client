import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-full bg-black text-white'>
                {/* user dashboard */}
                <li><NavLink to={"analytics"}>Analytics</NavLink></li>
                <li><NavLink to={"payment-history"}>Payment History</NavLink></li>
                <li><NavLink to={"registered-camps"}>Registered Camps</NavLink></li>
                {/* admin dashboard */}
                <li><NavLink to={"add-camp"}>Add Camp</NavLink></li>
                <li><NavLink to={"manage-camp"}>Manage Camp</NavLink></li>
                <li><NavLink to={"manage-registered-camp"}>Manage Registered Camp</NavLink></li>

            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;