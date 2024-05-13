import './../../styles/PersonByName.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import TextField from '@mui/material/TextField';
import React from 'react';
import AddUpdatePersonDialog from '../Dialogs/AddUpdatePersonDialog';
//import logo from './../../world.gif'

export default function AddDuty() {

    //const [loading, setLoading] = React.useState(false);
    //const [isError, setIsError] = React.useState(false);
    //const [error, setError] = React.useState("");

    // TODO: implement API call
    //const handleSubmit = async (name, id) => {
        // initialize 
        //setRows([]);
        //setLoading(true);
        //setIsError(false);
        //setError("");

        //if (name === "") { // validate parameter
            //setIsError(true);
            //setError("Error: Name field empty.");
            //setLoading(false);
        //} else {
            //try {
                //const response = await fetch(`https://stargateapi.azurewebsites.net/AstronautDuty/${name}`, {
                    //mode: "cors",
                    //method: "GET"
                //});
                //if (!response.ok) {
                    //setIsError(true);
                    //setError('Failed to fetch data');
                    //throw new Error('Failed to fetch data');
                //} else {
                    //const data = await response.json();
                    //setRows(data.astronautDuties);  // set to astronautDuties, not People
                //}
            //} catch (error) {
                //setIsError(true);
                //setError('No data found.');
                //console.error('Error fetching data:', error);
            //} finally {
                //setLoading(false); // loading is done
            //}
        //}
    //};

    const onChangeId = (e) => {
        //setId(e.currentTarget.value);
    }

    const onChangeName = (e) => {
        //setName(e.currentTarget.value);
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
                    ADD/UPDATE PERSON
                </p>
                <p style={{fontSize:20, marginTop: -50}}>
                    (leave Person ID blank if updating an existing person)
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
                }} id="name" label="Name" onChange={onChangeName} variant="filled" />
                <Stack className="stack" spacing={5} direction="column">
                <Button style={{ maxWidth: '140px', maxHeight: '60px', minWidth: '140px', minHeight: '60px' }} sx={{ backgroundColor: "grey", color: "white" }} className="option-button" variant="contained">SUBMIT</Button>
                </Stack>
                <div style={{ color: 'red', marginTop: 20 }}>{'NOTE: This is a preview of this screen. Functionality will be implemented soon.'}</div>
                <AddUpdatePersonDialog isSuccess={true}></AddUpdatePersonDialog>
                <Stack className="stack" spacing={5} direction="column">
                    <Button href="/Options" sx={{ backgroundColor: "white", color: "black" }} className="option-button" variant="contained">MENU</Button>
                </Stack>
            </header>
        </div>
    );
}