import React, { useEffect, useLayoutEffect, useState } from "react";
import EtherHelper from "./ethers/EtherHelper";
import { CircularProgress } from "@material-ui/core"; // Import CircularProgress
import { EtherContext } from "./ethers/EtherContext";
import { Button, makeStyles } from "@material-ui/core";
import { EtherContextRepository } from "./ethers/EtherContext";

// @ts-ignore
const { ethereum } = window;

const useStyles = makeStyles({
  button: {
    background: "yellow",
    border: "2px solid yellow",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 48,
    padding: "0 0px",
    fontWeight: "bold",
    fontFamily: "Roboto",
    "&:hover": {
      background: "#1976d2",
      color: "white",
    },
  },
});

const Connector: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<string | undefined>();
  const classes = useStyles();

  const { context, saveContext } = React.useContext(EtherContext) as EtherContextRepository;

  useLayoutEffect(() => {
    EtherHelper.connectErrorListener(onError);
    EtherHelper.connectAccountListener(onAccountsChanged);
    EtherHelper.connectChainListener(onChainChanged);

    return () => {
      EtherHelper.disconnectListeners();
    };
  }, [context.connected]);

  useEffect(() => {
    if (context.balance) setBalance(`${context.balance.toFixed(2)} ${context.chainSymbol}`);
  }, [context.balance, context.chainSymbol]);

  function onError(...args: any[]) {
    console.log("ERROR", args);
  }

  function onChainChanged(chainId: string) {
    if (!context.connected) return;
    window.location.reload();
  }

  function onAccountsChanged(accounts: string[]) {
    if (!context.connected) return;
    window.location.reload();
  }

  function connect() {
    if (!ethereum) return;
    if (context.connected ?? false) return;
    setLoading(true);
    EtherHelper.connect(context).then((ctx: any) => {
      console.log("Connector.EtherHelper.connect: ", ctx);
      saveContext(ctx);
      setLoading(false);
    });
  }

  function disconnect() {
    console.log("Connector.disconnect");
    setBalance(undefined);
    const resetCtx = { ...context, ...EtherHelper.initialAccount(), ...EtherHelper.initialToast() };
    EtherHelper.disconnect(resetCtx).then(saveContext);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {children}
      {balance ? <span style={{ fontSize: "2x1", fontWeight: "bold", marginRight: 15 }}>{balance}</span> : " "}
      <Button
        variant="contained"
        disableElevation
        size="small"
        style={{ marginRight: "-20px", minWidth: 100 }}
        className={classes.button}
        onClick={context.connected ? disconnect : connect}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={20} style={{color: 'yellow'}} />
        ) : (
          <span>{context.addressSigner !== undefined ? `${context.addressSigner.substring(0, 7)}...` : "CONNECT"}</span>
        )}
      </Button>
    </div>
  );
};

export default Connector;
