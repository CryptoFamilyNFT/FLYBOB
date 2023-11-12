import React from 'react';
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

import LOGO from '../../assets/images/drip.jpeg';

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
        fontFamily: "Josefin Sans, sans-serif"
    },
}));

const data = [
    { user: 'User1', score: 100 },
    { user: 'User2', score: 90 },
    { user: 'User3', score: 100 },
    { user: 'User4', score: 90 },
];

const TopBoard = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ backgroundColor: 'transparent', marginTop: 40, border: '2px solid transparent', borderBottom: 'none'}}>
                <img src={LOGO} alt="" style={{ border: '2px solid transparent', borderRadius: '50%', width: 200, height: 200 }} />
                <Typography style={{ color: 'yellow', fontFamily: "Josefin Sans, sand-serif", fontWeight: 'bold', fontSize: '40px', marginTop: 50, textShadow: '0 0 20px black' }}> BOB ADVENTURES 2</Typography>
            </div>
        </div>
    );
};

export default TopBoard;
