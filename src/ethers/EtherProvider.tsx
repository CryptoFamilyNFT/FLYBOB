import React, { ReactNode, useEffect } from "react";
import EtherHelper from "./EtherHelper";
import { EtherContext } from "./EtherContext";
import { IEtherContext } from "./IEtherContext";
import { Typography, Link, Box } from "@mui/material";
import Alert from '@mui/material/Alert';  // Replace Chakra UI's Text with MUI's Alert

const EtherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Commented out the Chakra UI toast and Text
  // const toast = useToast();
  const [context, setContext] = React.useState<IEtherContext>({ loaded: false, reload: true });

  const saveContext = (context: IEtherContext) => {
    setContext(context);
  };

  useEffect(() => {
    // bind listeners
    EtherHelper.connectErrorListener(onError); // TODO move to toast

    // init first time
    EtherHelper.queryProviderInfo(context).then(c => saveContext({ ...c, loaded: true, connected: false }));

    return () => {// unmount
      EtherHelper.disconnectListeners();
    }
  }, []);

  function onError(e: string) {
    console.log("EtherProvider.error: ", e)
  }

  function getAlertDescription(): ReactNode {
    return (
      <>
        {/* <Text>{context.toastDescription}</Text> */}
        <Typography>{context.toastDescription}</Typography>
        {/* {
          context.toastLink
            ?
            <Link gap={2} href={context.toastLink.url} target="_blank" rel="noopener noreferrer">
              {context.toastLink.name}
            </Link>
            : <></>
        } */}
      </>
    );
  }

  useEffect(() => {
    if (context.toastId) { // && !toast.isActive(context.toastId)) {
      // Replaced Chakra UI's useToast with a simple alert
      alert(`${context.toastTitle}\n${context.toastDescription}`);
    }

  }, [context.toastId]);

  return <EtherContext.Provider value={{ context, saveContext }}>{children}</EtherContext.Provider>;
};

export default EtherProvider;
