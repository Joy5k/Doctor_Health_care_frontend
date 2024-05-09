import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItem";
import { UserRole } from "@/types";
import { getUserInfo } from "@/services/actions/auth.services";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
const [userRole,setUserRole]=useState("")
useEffect(()=>{
  const {role} = getUserInfo()
  setUserRole(role)
},[])
  
  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
              gap={1}
              component={Link}
              href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography variant="h6" component="h1" sx={{cursor:"pointer"}}>
          PH Health care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
         <SidebarItem key={index} item={item} ></SidebarItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
