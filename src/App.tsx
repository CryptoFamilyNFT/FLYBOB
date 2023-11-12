// Libs
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Menu from './containers/Menu';
import Poster from './components/Poster';

// Constants
import testAttributes from "./testAttributes";
import Navbar from './Navbar';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import TopBoard from './components/Poster/TopBoard';

const useStyles = makeStyles((theme: any) => ({
  PosterMobile: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    height: '100%',
  },
  table: {
    minWidth: 650,
    fontFamily: "Josefin Sans, sans-serif",
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontFamily: "Josefin Sans, sans-serif",
  },
}));

function App() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <BrowserRouter>
      <div className="App-blurred" data-testid={testAttributes.APP_COMPONENT}>
        <div className="App-content"></div>
        {isMobile ? (
          <>
            <Navbar />
            <Poster />
            <Menu />
          </>

        ) : (
          <>
            <Navbar />
            <Poster />
            <Menu />
          </>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
