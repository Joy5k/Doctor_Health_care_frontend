

"use client"


import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  if(!isLoggedIn()){
   router.push("/login")
  }
  return <DashboardDrawer>{children} </DashboardDrawer>
};

export default DashboardLayout;
