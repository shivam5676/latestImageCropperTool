import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Home
          </Link>
        </Typography>
        <Button component={Link} to="/merge" color="inherit">
          Merge
        </Button>
        <Button component={Link} to="/crop" color="inherit">
          Crop
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
