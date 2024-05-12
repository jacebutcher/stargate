import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddUpdatePersonDialog({personId, name}) {

  const handleSubmit = (name) => {
    // make API call

    // set field values
    //setFieldValues(); 

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const setFieldValues = (id, rank, duty, start, end) => {
    setID(id);
    setCurrentRank(rank);
    setCurrentDutyTitle(duty);
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <React.Fragment>
      <Button style={{maxWidth: '140px', maxHeight: '60px', minWidth: '140px', minHeight: '60px'}} sx={{ backgroundColor: "green", color: "white"}} variant="outlined" onClick={handleSubmit}>
        SUBMIT
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Results
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            ID: {personId}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button sx={{ backgroundColor: "green", color: "white"}} autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}