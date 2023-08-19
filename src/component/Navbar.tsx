import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)', // Add shadow
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        {/* Add other navbar components here */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
