import './../../styles/PersonByName.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import TextField from '@mui/material/TextField';
import React from 'react';
import AddDutyDialog from '../Dialogs/AddDutyDialog';

export default function AddDuty() {

    const [id, setId] = React.useState(0);
    const [rank, setRank] = React.useState("");
    const [dutyTitle, setDutyTitle] = React.useState("");
    const [dutyStartDate, setDutyStartDate] = React.useState("");
    const [dutyEndDate, setDutyEndDate] = React.useState("");

    const onChangeId = (e) => {
        setId(e.currentTarget.value);
    }

    const onChangeRank = (e) => {
        setRank(e.currentTarget.value);
    }

    const onChangeDutyTitle = (e) => {
        setDutyTitle(e.currentTarget.value);
    }

    const onChangeStartDate = (e) => {
        setDutyStartDate(e.currentTarget.value);
    }

    const onChangeEndDate = (e) => {
        setDutyEndDate(e.currentTarget.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Starfield
                    starCount={2000}
                    starColor={[0, 185, 2]}
                    speedFactor={0.1}
                    backgroundColor="black"
                />
                <p className="App-title">
                    ADD ASTRONAUT DUTY
                </p>
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="personId" label="Person ID" onChange={onChangeId} variant="filled" />
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="rank" label="Rank" onChange={onChangeRank} variant="filled" />
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="dutyTitle" label="Duty Title" onChange={onChangeDutyTitle} variant="filled" />
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="startDate" label="Start Date" onChange={onChangeStartDate} variant="filled" />
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="endDate" label="End Date" onChange={onChangeEndDate} variant="filled" />
                <Stack className="stack" spacing={5} direction="column">
                    <AddDutyDialog id={id} rank={rank} dutyTitle={dutyTitle} dutyStartDate={dutyStartDate} dutyEndDate={dutyEndDate}></AddDutyDialog>
                </Stack>
                <Stack className="stack" spacing={5} direction="column">
                    <Button href="/Options" sx={{ backgroundColor: "white", color: "black" }} className="option-button" variant="contained">MENU</Button>
                </Stack>
            </header>
        </div>
    );
}