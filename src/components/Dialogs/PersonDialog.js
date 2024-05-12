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
import logo from './../../world.gif'
import './../../styles/PersonDialog.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function PersonDialog({ name }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false); // New state for loading
    const [ID, setID] = React.useState(0);
    const [currentRank, setCurrentRank] = React.useState("");
    const [currentDutyTitle, setCurrentDutyTitle] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [results, setResults] = React.useState("Results");

    const handleSubmit = async (name) => {
        setLoading(true); // Set loading to true when starting the request
        initializeFieldValues();

        try {
            try {
                const response = await fetch(`https://stargateapi.azurewebsites.net/Person/${name}`, {
                    mode: "cors",
                    method: "GET"
                });
                if (!response.ok) {
                    setResults("Not Found.")
                    throw new Error('Failed to fetch data');
                } else {
                    const data = await response.json();
                    setFieldValues(data.person.personId, data.person.currentRank, data.person.currentDutyTitle, data.person.careerStartDate, data.person.careerEndDate);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false); // Set loading to false when request completes
            setOpen(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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
        setResults("Results"); // default
    };

    const initializeFieldValues = () => {
        setID(0);
        setCurrentRank('');
        setCurrentDutyTitle('');
        setStartDate('');
        setEndDate('');
    };

    return (
        <React.Fragment>
            {loading && <img style={{ alignSelf: 'center' }} width={50} height={50} src={logo} alt="loading..." />}
            {loading && <div className={"loading"}>Fetching data from API.....</div>}
            <Button style={{ maxWidth: '140px', maxHeight: '60px', minWidth: '140px', minHeight: '60px' }} sx={{ backgroundColor: "green", color: "white" }} variant="outlined" onClick={() => handleSubmit(name)}>
                SUBMIT
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {results}
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
                        Name: {name}
                    </Typography>
                    <Typography gutterBottom>
                        ID: {ID}
                    </Typography>
                    <Typography gutterBottom>
                        Current Rank: {currentRank}
                    </Typography>
                    <Typography gutterBottom>
                        Current Duty Title: {currentDutyTitle}
                    </Typography>
                    <Typography gutterBottom>
                        Career Start Date: {startDate}
                    </Typography>
                    <Typography gutterBottom>
                        Career End Date: {endDate}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ backgroundColor: "green", color: "white" }} autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
