import SideBar from "@/component/SideBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
