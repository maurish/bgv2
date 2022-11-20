import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

interface TopBarProps {
  toggleMenu: () => void;
}
export const TopBar: React.FC<TopBarProps> = ({ toggleMenu }) => {
  return (
    <AppBar
      position="absolute"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton onClick={toggleMenu}>
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
