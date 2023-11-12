// Libs
import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import styles from './Menu.module.css';

// Components
import List from './List';

// Type definitions
import { MenuType } from './Menu.types';

// Constants
import testAttributes from "../../testAttributes";
import TopBoard from '../../components/Poster/TopBoard';

const Scene = React.lazy(() =>
  import(
    /* webpackChunkName: "SceneComponent" */
    /* webpackPreload: true */
    './Scene'
    )
);
const About = React.lazy(() =>
  import(
    /* webpackChunkName: "AboutComponent" */
    /* webpackPrefetch: true */
    './About'
    )
);


const Menu: MenuType = ({history}) => {
  const routes = (<Switch>
    <Route path='/game' component={Scene}/>
    <Route path='/author' component={About}/>
    <Route path='/' component={List}/>
  </Switch>);

  const handleBackButtonClick = (): void => history.goBack();

  const isBackButtonHidden = ['/', '/leaderboard', '/game', '/flappy-bird', '/flappy-bird/'].includes(history.location.pathname);

  const fallbackNode = <p>Loading...</p>;

  return (
    <div className={styles.Menu} data-testid={testAttributes.MENU_COMPONENT}>
      <Suspense fallback={fallbackNode}>{routes}</Suspense>
      <div className={styles.Links}>
      <a href="https://linktr.ee/BOBAdventures"><PublicIcon style={{ fontSize: 40, color: "yellow" }} /></a>
      <a href="https://twitter.com/CroBobAdventure/"><TwitterIcon style={{ fontSize: 40, color: "yellow" }} /></a>
      </div>
    </div>
  )
}
export {Menu};
export default withRouter(Menu);
