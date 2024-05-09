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
import SidebarItem from "./sidebarItem";
const Sidebar = () => {
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
        {drawerItems("super_admin" as UserRole).map((item, index) => (
         <SidebarItem key={index} item={item} ></SidebarItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
