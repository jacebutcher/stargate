import './../../styles/PersonByName.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import React from 'react';
import DutiesTable from '../Tables/DutiesTable';
import logo from './../../world.gif'
import TextField from '@mui/material/TextField';

export default function DutiesByName() {

    const [loading, setLoading] = React.useState(false);
    const [rows, setRows] = React.useState([])
    const [name, setName] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    const [error, setError] = React.useState("");

    const onChangeText = (e) => {
        setName(e.currentTarget.value);
    }

    const handleSubmit = async (name) => {
        // initialize 
        setRows([]);
        setLoading(true);
        setIsError(false);
        setError("");

        if (name === "") { // validate parameter
            setIsError(true);
            setError("Error: Name field empty.");
            setLoading(false);
        } else {
            try {
                const response = await fetch(`https://stargateapi.azurewebsites.net/AstronautDuty/${name}`, {
                    mode: "cors",
                    method: "GET"
                });
                if (!response.ok) {
                    setIsError(true);
                    setError('Failed to fetch data');
                    throw new Error('Failed to fetch data');
                } else {
                    const data = await response.json();
                    setRows(data.astronautDuties);  // set to astronautDuties, not People
                }
            } catch (error) {
                setIsError(true);
                setError('No data found.');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // loading is done
            }
        }
    };

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
                    RETRIEVE DUTIES BY NAME
                </p>
                <TextField sx={{
                    input: {
                        color: "black",
                        background: "white"
                    }
                }} id="filled-basic" label="Name" onChange={onChangeText} variant="filled" />
                {loading && <img style={{ alignSelf: 'center' }} width={50} height={50} src={logo} alt="loading..." />}
                {loading && <div className={"loading"}>Fetching data from API.....</div>}
                {isError && <div style={{ color: 'red', marginTop: 20 }}>{error}</div>}
                <Stack className="stack" spacing={5} direction="column">
                    <Button onClick={() => handleSubmit(name)} style={{ maxWidth: '140px', maxHeight: '60px', minWidth: '140px', minHeight: '60px' }} sx={{ backgroundColor: "green", color: "white" }} className="option-button" variant="contained">SUBMIT</Button>
                </Stack>
                <Stack className="stack" spacing={5} direction="column"><DutiesTable rows={rows}></DutiesTable></Stack>
                <Stack className="stack" spacing={5} direction="column">
                    <Button href="/Options" sx={{ backgroundColor: "white", color: "black" }} className="option-button" variant="contained">MENU</Button>
                </Stack>
            </header>
        </div>
    );
}