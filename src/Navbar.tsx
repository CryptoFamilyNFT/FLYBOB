import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Connector from './Connector';
import { ModeSwitcher } from './ModeSwitcher';

// Definisci l'interfaccia per le props
interface NavbarProps {
  handleOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleOpenModal }) => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Modifica il valore per adattarlo alle tue esigenze

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" style={{ height: 60 }}>
      <Toolbar style={{ gap: 15 }}>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem component={Link} to="/leaderboard" onClick={handleMenuClose}>Leaderboard</MenuItem>
              <MenuItem onClick={() => { handleOpenModal(); handleMenuClose(); }}>My BOBz</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Typography variant="h6" style={{ color: 'yellow', fontFamily: 'Josefin Sans, sans-serif' }} component={Link} to="/">
              Home
            </Typography>
            <Typography variant="h6" style={{ color: 'yellow', fontFamily: 'Josefin Sans, sans-serif' }} component={Link} to="/leaderboard">
              Leaderboard
            </Typography>
            <Typography variant="h6" style={{ color: 'yellow', fontFamily: 'Josefin Sans, sans-serif' }} component={Link} to="/mybobz" onClick={handleOpenModal}>
              My BOBz
            </Typography>
          </>
        )}
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
