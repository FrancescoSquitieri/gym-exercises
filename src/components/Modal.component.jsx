import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Modal = ({ open, setOpen }) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseInLocalStorage = () => {
    localStorage.setItem('isOpenModal', false);
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography fontSize='30px' textTransform='uppercase'>
            Important Notice
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The data used are taken from "rapidapi", a very useful third party service that exposes many data but which unfortunately, after 500 calls to an endpoint in a single month you have to wait for the next month to be able to make a further 500 calls to the maximum (free floor , I am poor but very determined! 😁💪 ), if something should go wrong, I am very sorry but the maximum calls for the endpoints with which I developed this app have been reached
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInLocalStorage}>
            Close and remember in localstorage
          </Button>
          <Button onClick={handleClose} color='success'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal