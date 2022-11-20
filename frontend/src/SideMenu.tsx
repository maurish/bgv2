import { Extension, Person } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

interface SideMenuProps {
  open: boolean;
}
export function SideMenu({ open }: SideMenuProps) {
  return (
    <Drawer
      open={false}
      variant="permanent"
      sx={{ display: open ? "flex" : "none" }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Extension />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Players</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
