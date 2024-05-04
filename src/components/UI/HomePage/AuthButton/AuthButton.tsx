"use client"
import useUserInfo from "@/hooks/useUserInfo";
import { getUserInfo, removeUser } from "@/services/actions/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = useUserInfo();
  console.log(userInfo,'This is user info');
  const router = useRouter();
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo.userId ? (
        <Button color='error' onClick={handleLogout}>
        Logout
     </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
