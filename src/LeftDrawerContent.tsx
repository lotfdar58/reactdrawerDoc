import React, { FC } from 'react';
import { ListItemText, Divider, ListItemButton, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LeftDrawerDynamicContent from './LeftDrawerDynamicContent.tsx';


const LeftDrawerContent: FC = () => {
  return (
    <Box>
      <ListItemButton component={RouterLink} to="/">
        <ListItemText primary="Validate Documents" />
      </ListItemButton>
       <ListItemButton component={RouterLink} to="/rules">
        <ListItemText primary="Rules" />
      </ListItemButton>
      <Divider />
      <LeftDrawerDynamicContent/>
    </Box>
  );
};

export default LeftDrawerContent;
