// Libs
import React, { Suspense } from 'react';

// Images
import Logo from '../../assets/images/logo.jpeg';

// Styles
import styles from './Poster.module.css';
import { Link, useLocation } from 'react-router-dom';

// Constants
import testAttributes from "../../testAttributes";
import Leaderboard from './LeaderBoard';
import { Button, useMediaQuery, useTheme } from '@material-ui/core';
import { Route, Switch, withRouter } from 'react-router-dom';
import TopBoard from './TopBoard';

const leaderboardData = [
  { user: 'User1', score: 100 },
  { user: 'User2', score: 90 },
  { user: 'User3', score: 100 },
  { user: 'User4', score: 90 },
];

const Poster = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const routes = (<Switch>
    <Route path='/leaderboard' component={Leaderboard} />
    <Route path='/topboard' component={TopBoard} />
  </Switch>);
  const location = useLocation();

  const fallbackNode = <p>Loading...</p>;

  return (
    <div className={styles.Poster} data-testid={testAttributes.POSTER_COMPONENT}>
      {isMobile && location.pathname !== '/' ? (
        <div className={styles.PosterMobile}>
          <Suspense fallback={fallbackNode}>{routes}</Suspense>
        </div>
      ) : (
        <div>
          {isMobile && location.pathname === '/' ? <TopBoard/> : <Leaderboard />}
        </div>
      )}
    </div>
  );
};

export default Poster;
