import React, { useContext, useEffect, useState } from 'react';
import { Paper, Card, CardContent, Typography, makeStyles, Switch, Grid, styled, Modal, useTheme } from '@material-ui/core';
import EtherHelper from '../../ethers/EtherHelper';
import { EtherContext, EtherContextRepository } from '../../ethers/EtherContext';
import { IEtherContext } from '../../ethers/IEtherContext';
import CardHeader from '@material-ui/core/CardHeader';
import { Button, CardMedia, Divider, useMediaQuery } from '@mui/material';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import { ModeSwitcher } from '../../ModeSwitcher';
import Connector from '../../Connector';
import { yellow } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'yellow',    // Colore dello sfondo giallo
        overflowY: 'auto',       // Abilita lo scrolling verticale in caso di overflow
        height: '100%',          // Altezza fissa per mostrare uno scrolling se necessario
        padding: theme.spacing(2), // Padding interno
        overflow: 'auto',        // Utilizza 'auto' per l'overflow verticale
    },
    card: {
        marginBottom: theme.spacing(2), // Spaziatura tra le cards
    },
    catchyTextSupplyCardNFT: {
        color: 'yellow',
        fontFamily: "Josefin Sans, sans-serif",
        fontSize: 28,
        letterSpacing: 0.2,
        lineHeight: 1.2,
    },
    media: {
        position: 'relative',
        height: 0,
        paddingTop: '100%', // 16:9
    },
    themeDark: {
        background: 'black',
        maxWidth: 345,
        border: "2px solit white",
        borderRadius: 50
    }
}));

interface BobzWrap {
    handleCloseModal: () => void;
}

const Bobz: React.FC<BobzWrap> = ({ handleCloseModal }) => {
    const { context, saveContext } = useContext(EtherContext) as EtherContextRepository
    const classes = useStyles();
    const [tokenCards, setTokenCards] = useState<JSX.Element[]>([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchTokenCards = async () => {
        const newTokenCards: JSX.Element[] = [];
        const bobTokenIds = context.BobTokenIds ?? []

        for (const nft of bobTokenIds) {
            try {
                const tokenImage = await EtherHelper.getBobTokenURI(context, nft);
                console.log(tokenImage)
                const tokenData = tokenImage;
                newTokenCards.push(
                    <Card className={classes.themeDark} key={nft} style={{ marginBottom: 30 }}>
                        <CardHeader
                            className={classes.themeDark}
                            title={
                                <Typography variant="h4" className={classes.catchyTextSupplyCardNFT} color="textSecondary" component="p">
                                    {tokenData.name}
                                </Typography>
                            }
                        />
                        <CardMedia
                            className={classes.media}
                            image={'https://dweb.link/ipfs/' + tokenData.image.slice(7)}
                            title="NFT Image"
                        >
                        </CardMedia>
                        <CardContent>
                        </CardContent>
                    </Card >
                );
            } catch (error) {
                console.error('Error fetching token data:', error);
            }
        }

        setTokenCards(newTokenCards);
    };

    useEffect(() => {
        fetchTokenCards()
    }, [context])

    return (
        <Paper className={classes.root}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                {!context.connected && (
                    <Connector>
                        <ModeSwitcher mr={4} />
                    </Connector>
                )}
                <Button variant='contained' style={{ color: 'black', background: 'yellow', border: '2px solid transparent', borderRadius: '15', marginLeft: 20 }}>Refresh</Button>
                <Button variant='contained' style={{ color: 'yellow', background: 'black', border: '2px solid transparent', borderRadius: '15', marginLeft: 20 }} onClick={handleCloseModal}>Close</Button>
            </div>
            <div style={{ marginTop: 20 }}>
                {isMobile && (
                    <>
                        {tokenCards}
                    </>
                )}
                {!isMobile && (
                    <Grid container spacing={2}>
                        {tokenCards.map((card, index) => (
                            <Grid item key={index} xs={4}> {/* Dividi lo spazio in 3 colonne per ogni card */}
                                {card}
                            </Grid>
                        ))}
                    </Grid>
                )}
            </div>
        </Paper>
    );
};

export default Bobz;
