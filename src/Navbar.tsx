// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Connector from './Connector';
import { ModeSwitcher } from './ModeSwitcher';

const Navbar = () => {
    return (
        <AppBar position="fixed" style={{height: 60}}>
            <Toolbar style={{gap: 15}}>
                <Typography variant="h6" style={{color: 'yellow', fontFamily: 'Josefin Sans, sans-serif'}} component={Link} to="/">
                    Home
                </Typography>
                <Typography variant="h6" style={{color: 'yellow', fontFamily: 'Josefin Sans, sans-serif'}} component={Link} to="/leaderboard">
                    Leaderboard
                </Typography>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, marginRight: 10 }}>
                    <Connector>
                        <ModeSwitcher mr={4} />
                    </Connector>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
