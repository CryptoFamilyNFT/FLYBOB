// Libs
import React, { Suspense, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import styles from './Menu.module.css';
import Modal from '@mui/material/Modal'; // Importa Modal
import Bobz from './Bobz';
import List from './List';
import { MenuType } from './Menu.types';

const Scene = React.lazy(() =>
  import('./Scene')
);

const About = React.lazy(() =>
  import('./About')
);

const Menu: MenuType = ({ history }) => {
  const [open, setOpenModal] = useState(true);

  const routes = (
    <Switch>
      <Route path='/game' component={Scene} />
      <Route path='/author' component={About} />
      <Route path='/' component={List} />
      <Route path='/mybobz' component={Bobz} />
    </Switch>
  );

  const handleBackButtonClick = () => history.goBack();

  const isBackButtonHidden = ['/', '/leaderboard', '/game', '/flappy-bird', '/flappy-bird/'].includes(history.location.pathname);

  const fallbackNode = <p>Loading...</p>;

  return (
    <div className={styles.Menu} data-testid="menu-component">
      <Suspense fallback={fallbackNode}>{routes}</Suspense>
      <div className={styles.Links}>
        <a href="https://linktr.ee/BOBAdventures"><PublicIcon style={{ fontSize: 40, color: "yellow" }} /></a>
        <a href="https://twitter.com/CroBobAdventure/"><TwitterIcon style={{ fontSize: 40, color: "yellow" }} /></a>
      </div>
    </div>
  );
};

export { Menu };
export default withRouter(Menu);
