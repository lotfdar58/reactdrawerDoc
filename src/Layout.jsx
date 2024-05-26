
import { Box } from '@mui/material';
import React, { useState } from 'react';
import LeftDrawer from './LeftDrawer';
import Header from './Header';

const Layout = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Box sx={{ p:4}}>
      <Box sx={{ display: 'flex', p:4}}>
        <Header setDrawerOpen={setDrawerOpen}/>
        <LeftDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
        <Box sx={{ display: 'flex'}}>
            {children}
        </Box>
      </Box>  
    </Box>
  );
};

export default Layout;
