import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";


const DashboardLayout = () => {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout;