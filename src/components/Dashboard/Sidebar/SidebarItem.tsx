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
import { usePathname } from "next/navigation";

type TProps = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: TProps) => {
    const linkPath = `/dashboard/${item.path}`
    const pathname=usePathname()
  return (
    <Link href={linkPath }>
          <ListItem disablePadding sx={{
              ...(linkPath === pathname ? {
              borderRight:"3x solid #1586FD" ,"& svg":{color:"#1586FD"}
          }:{})
      }}>
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon></item.icon>}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
