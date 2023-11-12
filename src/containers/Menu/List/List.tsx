import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './List.module.css';
import { Button } from '@material-ui/core';
import { useMediaQuery, useTheme } from '@material-ui/core';

const List = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  return (
    <>
      {isMobile && location.pathname === '/'  ?  (
        <div className={classes.List} style={{ marginTop: 0 }}>
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/game'>Play</NavLink>
          </Button>
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/leaderboard'>Leaderboard</NavLink>
          </Button>
        </div>
      ) : (
        <div className={classes.List} style={{ marginTop: 300 }}>
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/game'>Play</NavLink>
          </Button>
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/leaderboard'>Leaderboard</NavLink>
          </Button>
        </div>
      )}
    </>
  )
};

export default List;
