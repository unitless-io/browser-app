import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import TagManager from 'react-gtm-module';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 5,
};

const GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY = 'unitless-gtm-trust-variant';
const GTM_ID = 'GTM-5F6QF8B';

enum GTM_TRUST_VARIANTS {
  INIT = '',
  ALLOWED = '1',
  DISALLOWED = '0',
}

const GtmTrustModal = () => {
  const [gtmTrustVariant, setGtmTrustVariant] = React.useState(
    () => localStorage.getItem(GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY) || GTM_TRUST_VARIANTS.INIT
  );

  const onDisallow = React.useCallback(() => {
    localStorage.setItem(GTM_TRUST_LOCAL_STORAGELOCAL_STORAGE_KEY, GTM_TRUST_VARIANTS.DISALLOWED);
    setGtmTrustVariant(GTM_TRUST_VARIANTS.DISALLOWED);
  }, [setGtmTrustVariant]);

  const onAllow = React.useCallback(() => {
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

  return (
    <div>
      <Modal
        open={gtmTrustVariant === GTM_TRUST_VARIANTS.INIT}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Google Tag Manager & Google Analytics Trust
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please allow GTM and GA to track your actions in the app to improve the product.
          </Typography>
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            <Button sx={{ marginRight: 1 }} onClick={onDisallow}>
              Disallow
            </Button>
            <Button onClick={onAllow}>Allow</Button>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
};

export default GtmTrustModal;
