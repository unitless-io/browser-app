import * as React from 'react';
import Button from '@mui/material/Button';
import TagManager from 'react-gtm-module';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
  position: 'absolute' as 'absolute',
  bottom: '0',
  width: '100%',
};

const GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY = 'unitless-gtm-trust-variant';
const GTM_ID = 'GTM-5F6QF8B';

enum GTM_TRUST_VARIANTS {
  INIT = '',
  ALLOWED = '1',
  DISALLOWED = '0',
}

const TITLE = 'Use Google Tag Manager & Google Analytics services?';
const TEXT = "Let's improve the product. This means sending your activity to GTM and GA.";
const DISAGREE = 'Disagree';
const AGREE = 'Agree';

export enum GtmAlertDialogVariant {
  Alert,
  Dialog,
}

const GtmAlertDialog = ({ variant = GtmAlertDialogVariant.Alert }: { variant?: GtmAlertDialogVariant }) => {
  const [gtmTrustVariant, setGtmTrustVariant] = React.useState(
    () => localStorage.getItem(GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY) || GTM_TRUST_VARIANTS.INIT
  );

  const onDisagree = React.useCallback(() => {
    localStorage.setItem(GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY, GTM_TRUST_VARIANTS.DISALLOWED);
    setGtmTrustVariant(GTM_TRUST_VARIANTS.DISALLOWED);
  }, [setGtmTrustVariant]);

  const onAgree = React.useCallback(() => {
    localStorage.setItem(GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY, GTM_TRUST_VARIANTS.ALLOWED);
    setGtmTrustVariant(GTM_TRUST_VARIANTS.ALLOWED);
  }, [setGtmTrustVariant]);

  React.useEffect(() => {
    if (gtmTrustVariant === GTM_TRUST_VARIANTS.ALLOWED) {
      TagManager.initialize({
        gtmId: GTM_ID,
      });
    }
  }, [gtmTrustVariant]);

  const open = gtmTrustVariant === GTM_TRUST_VARIANTS.INIT;

  return variant === GtmAlertDialogVariant.Dialog ? (
    <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{TITLE}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{TEXT}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDisagree}>{DISAGREE}</Button>
        <Button onClick={onAgree} autoFocus>
          {AGREE}
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    (open || null) && (
      <Alert
        severity="info"
        sx={style}
        action={
          <>
            <Button color="inherit" size="small" sx={{ marginRight: 1 }} onClick={onDisagree}>
              {DISAGREE}
            </Button>
            <Button color="inherit" size="small" onClick={onAgree}>
              {AGREE}
            </Button>
          </>
        }
      >
        <AlertTitle>{TITLE}</AlertTitle>
        {TEXT}
      </Alert>
    )
  );
};

export default React.memo(GtmAlertDialog);
