
import { Box } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import LeftDrawer from './LeftDrawer.tsx';
import Header from './Header.tsx';

interface LayoutProps {
  children: ReactNode; 
}

const Layout:React.FC<LayoutProps> = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

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
