import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Games } from "./Games";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

const theme = createTheme();

export const Dashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const toggleMenu = () => setOpen((open) => !open);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar toggleMenu={toggleMenu} />
        <SideMenu open={open} />
        <Box component="main" sx={{ flexGrow: 1, height: "100vh" }}>
          <Toolbar />
          <Container sx={{ mt: 4, mb: 4 }}>
            <Games />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
