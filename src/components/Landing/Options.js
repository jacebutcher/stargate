import './../../styles/Options.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Starfield from 'react-starfield';

function Options() {
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
          MENU
        </p>
        <Stack className="stack" spacing={3} direction="row">
      <Button href="/PersonByName" color="success" variant="contained">Retrieve a person by name</Button>
      <Button href="/AllPeople" color="success" variant="contained">Retrieve all people</Button>
      <Button href="/DutiesByName" color="success" variant="contained">Retrieve Astronaut Duties by name</Button>
      <Button href="/AddUpdatePerson" sx={{ backgroundColor: "grey", color: "white" }} variant="contained">Add/Update a person by name</Button>
      <Button href="/AddDuty" sx={{ backgroundColor: "grey", color: "white" }} variant="contained">Add an Astronaut Duty</Button>
    </Stack>
      <Button style={{float: 'right'}} href="/" sx={{backgroundColor: "white", color: "black"}} className = "option-button" variant="contained">HOME</Button>
      </header>
    </div>
  );
}

export default Options;