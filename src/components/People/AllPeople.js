import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import PeopleTable from '../Tables/PeopleTable';
import logo from './../../world.gif';
import { fetchAllPeople } from './../../api/api.js'

export default function AllPeople() {
    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([]);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const data = await fetchAllPeople();
            setRows(data);
        } catch (error) {
            // TODO: include error handling (should only be when API/DB is down
        } finally {
            setLoading(false); 
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
                    RETRIEVE ALL PEOPLE
                </p>
                {loading && <img style={{ alignSelf: 'center' }} width={50} height={50} src={logo} alt="loading..." />}
                {loading && <div className={"loading"}>Fetching data from API.....</div>}
                <Stack className="stack" spacing={5} direction="column">
                    <Button onClick={handleSubmit} style={{maxWidth: '140px', maxHeight: '60px', minWidth: '140px', minHeight: '60px'}} sx={{ backgroundColor: "green", color: "white"}} className="option-button" variant="contained">SUBMIT</Button>
                </Stack>
                <Stack className="stack" spacing={5} direction="column"> <PeopleTable rows={rows}></PeopleTable></Stack>
                <Stack className="stack" spacing={5} direction="column">
                    <Button href="/Options" sx={{ backgroundColor: "white", color: "black" }} className="option-button" variant="contained">MENU</Button>
                </Stack>
            </header>
        </div>
    );
}