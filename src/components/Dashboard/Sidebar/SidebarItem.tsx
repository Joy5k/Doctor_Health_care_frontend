import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "@/types";

type TProps = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: TProps) => {
  return (
    <Link href="/">
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon></item.icon>}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
