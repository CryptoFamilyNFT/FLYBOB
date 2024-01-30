// Libs
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Styles
import './App.css';

// Components
import Menu from './containers/Menu';
import Poster from './components/Poster';
import Modal from '@mui/material/Modal'; // Importa Modal
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import TopBoard from './components/Poster/TopBoard';
import Navbar from './Navbar';
import Bobz from './containers/Menu/Bobz';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Stato per gestire l'apertura del modal
  const [openModal, setOpenModal] = useState(false);

  // Funzione per aprire il modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Funzione per chiudere il modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <BrowserRouter>
      <div className="App-blurred">
        <div className="App-content"></div>
        {isMobile ? (
          <>
            <Navbar handleOpenModal={handleOpenModal} />
            <Poster />
              <Menu />
          </>
        ) : (
          <>
            <Navbar handleOpenModal={handleOpenModal} />
            <Poster />
              <Menu />
          </>
        )}

        <Modal open={openModal} onClose={() => setOpenModal(openModal)}>
          <Bobz handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </BrowserRouter>
  );
}

export default App;
