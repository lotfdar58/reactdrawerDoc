import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box, AppBar, Toolbar, IconButton, CssBaseline } from '@mui/material';


const Header = ({setDrawerOpen}) => {
  

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Document Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
