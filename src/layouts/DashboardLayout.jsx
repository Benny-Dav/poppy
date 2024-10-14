import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";


const DashboardLayout = () => {
  return (
    <div>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout;