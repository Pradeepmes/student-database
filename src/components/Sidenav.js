import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from '@mui/material';

const drawerWidth = 240;

export const SideNav = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box', 
          backgroundColor: '#f5f5f5' 
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Add Student" />
          </ListItem>
          <ListItem button component={Link} to="/studentdata">
            <ListItemText primary="Student Data" />
          </ListItem>
          <ListItem button component={Link} to="/productcard">
            <ListItemText primary="Product Data" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
