import React, { useEffect, useState } from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import Api from '../../api/api';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    fontFamily: "Josefin Sans, sans-serif"
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    fontFamily: "Josefin Sans, sans-serif"
  },
}));

interface Score {
  player: string;
  score: string;
}

const LeaderBoard = () => {
  const classes = useStyles();
  const theme = useTheme()
  const [top10Scores, setTop10Scores] = useState<Score[]>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getLeaderBoard = async () => {
    try {
      const scores = await Api.getScores();
      const sortedScores = scores.sort((a, b) => parseInt(b.score) - parseInt(a.score));
      const top10 = sortedScores.slice(0, 10);
      setTop10Scores(top10);
    } catch (e) {
      console.log(e);
      setTop10Scores([{ player: '', score: '' }]);
    }
  };

  useEffect(() => {
    getLeaderBoard();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getLeaderBoard();
    }, 20000);

    return () => clearInterval(intervalId);
  }, [top10Scores]);


  return (
    <>
      {!isMobile && (
        <Paper style={{ backgroundColor: 'yellow', minHeight: 300, maxHeight: 300, overflowY: 'auto', gap: 10, border: '1px solid aqua' }}>
          <Typography variant="h4" className={classes.title} style={{ fontFamily: 'Josefin Sans, sans-serif', marginTop: 30 }}>
            Leaderboard
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>#</TableCell>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>User</TableCell>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {top10Scores?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }} component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{row.player?.slice(0, 5) + '...' + row.player?.slice(-5)}</TableCell>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {isMobile && (
        <Paper style={{ backgroundColor: 'yellow', maxHeight: 280, overflowY: 'auto', gap: 10, border: '1px solid aqua', width: 360 }}>
          <Typography variant="h4" className={classes.title} style={{ fontFamily: 'Josefin Sans, sans-serif', marginTop: 30 }}>
            Leaderboard
          </Typography>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>#</TableCell>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>User</TableCell>
                  <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {top10Scores?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }} component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{row.player?.slice(0, 5) + '...' + row.player?.slice(-5)}</TableCell>
                    <TableCell style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
};

export default LeaderBoard;
