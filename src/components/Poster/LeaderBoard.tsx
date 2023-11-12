import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
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
  const [top10Scores, setTop10Scores] = useState<Score[]>();

  useEffect(() => {
    const getLeaderBoard = async () => {
      try {
        const scores = await Api.getScores();

        // Ordina i punteggi in ordine decrescente
        const sortedScores = scores.sort((a, b) => parseInt(b.score) - parseInt(a.score));

        // Prendi solo i primi 10 punteggi
        const top10 = sortedScores.slice(0, 10);
        setTop10Scores(top10);
      } catch (e) {
        console.log(e);
        setTop10Scores([{ player: '', score: '' }]);
      }
    };

    getLeaderBoard();
  }, []);

  return (
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
  );
};

export default LeaderBoard;
