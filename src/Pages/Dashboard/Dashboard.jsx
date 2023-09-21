import {Link,Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="flex gap-2">
            <div className="w-[20%] bg-gray-300 p-4 mx-2 rounded-lg">
                <nav>
                    <ul>
                    <li> <Link to={`/dashboard`}>Dashboard</Link> </li>
                    <li> <Link to={`/dashboard/profile`}>Profile</Link> </li>
                    <li> <Link to={`/dashboard/EditProfile`}>Edit Profile</Link> </li>
                    </ul>
                </nav>
            </div>
            <div className="w-[80%]">
             <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;