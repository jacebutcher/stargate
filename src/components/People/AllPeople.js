import './../../styles/PersonByName.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';
import React from 'react';
import PeopleTable from '../Tables/PeopleTable';
import logo from './../../world.gif'


export default function AllPeople() {

    const [loading, setLoading] = React.useState(false);
    const [rows, setRows] = React.useState([])

    const handleSubmit = async () => {
        setLoading(true); // Set loading to true when starting the request
    
        try {
            const response = await fetch(`https://stargateapi.azurewebsites.net/Person/`, {
                mode: "cors",
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            } else {
                const data = await response.json();
                setRows(data.people); // Update rows with the fetched data
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false when request completes
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