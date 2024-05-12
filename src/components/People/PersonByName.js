import './../../styles/PersonByName.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import TextField from '@mui/material/TextField';
import React from 'react';
import PersonDialog from '../Dialogs/PersonDialog';

export default function PersonByName () {

    const [name, setName] = React.useState("");

    const onChangeText = (e) => {
        setName(e.currentTarget.value);
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
                    RETRIEVE A PERSON BY NAME
                </p>
                <TextField sx={{
          input: {
            color: "black",
            background: "white"
          }
        }} id="filled-basic" label="Name" onChange={onChangeText} variant="filled" />
                <Stack className = "stack" spacing={5} direction="column">
                    <PersonDialog name={name}></PersonDialog>
                </Stack>
                <Stack className = "stack" spacing={5} direction="column">
                    <Button href="/Options" sx={{ backgroundColor: "white", color: "black"}} className="option-button" variant="contained">MENU</Button>
                </Stack>
            </header>
        </div>
    );
}